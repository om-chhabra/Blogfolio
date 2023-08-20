export default function Modal({ children, onClose }) {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black opacity-60 z-20"
        onClick={onClose}
      />
      <dialog
        open
        className="bg-greyy text-white top-36 md:w-1/2 sm:w-3/5 w-3/4 border-none rounded-xl shadow-lg p-0 overflow-hidden z-20"
      >
        {children}
      </dialog>
    </>
  );
}
