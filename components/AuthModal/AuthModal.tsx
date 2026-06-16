'use client';

interface AuthModalProps {
  onClose: () => void;
}

/*
  Заглушка модального вікна.

  Потрібна для Footer,
  щоб не виникало помилок імпорту.
*/

export default function AuthModal({
  onClose,
}: AuthModalProps) {
  return (
    <div>
      <h2>Авторизація</h2>

      <button
        type="button"
        onClick={onClose}
      >
        To close
      </button>
    </div>
  );
}