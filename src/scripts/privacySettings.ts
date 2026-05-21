export type PrivacyConsent =
  | 'accepted'
  | 'rejected'
  | null;

const STORAGE_KEY = 'external-services';

/**
 * PUBLIC API
 */

export function getPrivacyConsent(): PrivacyConsent {
  const value =
    localStorage.getItem(STORAGE_KEY);

  if (
    value === 'accepted' ||
    value === 'rejected'
  ) {
    return value;
  }

  return null;
}

export function setPrivacyConsent(
  consent: Exclude<PrivacyConsent, null>
) {
  localStorage.setItem(
    STORAGE_KEY,
    consent
  );
}

export function hasAcceptedPrivacy(): boolean {
  return (
    getPrivacyConsent() === 'accepted'
  );
}

export function hasRejectedPrivacy(): boolean {
  return (
    getPrivacyConsent() === 'rejected'
  );
}

/**
 * INTERNAL HELPERS
 */

function updateToggleState() {
  const toggles =
    document.querySelectorAll<HTMLInputElement>(
      '[data-privacy-toggle]'
    );

  const isAccepted =
    hasAcceptedPrivacy();

  toggles.forEach((toggle) => {
    toggle.checked = isAccepted;
  });
}

function updateStatus() {
  const statusElements =
    document.querySelectorAll<HTMLElement>(
      '[data-privacy-status]'
    );

  const consent =
    getPrivacyConsent();

  statusElements.forEach((status) => {
    if (consent === 'accepted') {
      status.textContent =
        'Usługi zewnętrzne są włączone.';
    } else if (
      consent === 'rejected'
    ) {
      status.textContent =
        'Usługi zewnętrzne są wyłączone.';
    } else {
      status.textContent =
        'Nie wybrano ustawień prywatności.';
    }
  });
}

function applyConsent(
  consent: Exclude<PrivacyConsent, null>
) {
  setPrivacyConsent(consent);

  updateToggleState();
  updateStatus();

  /**
   * Close modal after decision
   */

  const modal =
    document.querySelector<HTMLDialogElement>(
      '#privacy_consent_modal'
    );

  modal?.close();

  /**
   * Optional global event
   */

  window.dispatchEvent(
    new CustomEvent(
      'privacy-settings-changed',
      {
        detail: consent
      }
    )
  );
}

function initPrivacyModal() {
  /**
   * If no decision exists
   * show modal automatically
   */

  const consent =
    getPrivacyConsent();

  if (consent !== null) return;

  const modal =
    document.querySelector<HTMLDialogElement>(
      '#privacy_consent_modal'
    );

  modal?.showModal();
}

/**
 * INIT
 */

export function initPrivacySettings() {
  /**
   * Initial UI sync
   */

  updateToggleState();
  updateStatus();

  /**
   * Auto-open modal
   */

  initPrivacyModal();

  /**
   * Accept buttons
   */

  const acceptButtons =
    document.querySelectorAll<HTMLElement>(
      '[data-privacy-action="accept"]'
    );

  acceptButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        applyConsent('accepted');
      }
    );
  });

  /**
   * Reject buttons
   */

  const rejectButtons =
    document.querySelectorAll<HTMLElement>(
      '[data-privacy-action="reject"]'
    );

  rejectButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        applyConsent('rejected');
      }
    );
  });

  /**
   * Save settings buttons
   */

  const saveButtons =
    document.querySelectorAll<HTMLElement>(
      '[data-privacy-action="save"]'
    );

  saveButtons.forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        const toggle =
          document.querySelector<HTMLInputElement>(
            '[data-privacy-toggle]'
          );

        if (!toggle) return;

        applyConsent(
          toggle.checked
            ? 'accepted'
            : 'rejected'
        );
      }
    );
  });
}