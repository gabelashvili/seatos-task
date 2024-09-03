import clsx from "clsx";
import { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./styles.module.css";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
  size?: "small" | "default" | "large";
  footerActions?: Array<{ label: string; onClick: () => void }>;
}

const Modal: FC<ModalProps> = ({
  children,
  closeModal,
  open,
  size = "default",
  title,
  footerActions,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleTabKeyPress = useCallback((event: KeyboardEvent) => {
    const elements = Array.from(
      modalRef.current?.querySelectorAll("button") || []
    );

    if (
      (elements && !document.activeElement) ||
      document.activeElement === elements[2]
    ) {
      elements[0].focus();
      event.preventDefault();
    }
  }, []);

  const handleEscapeKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscapeKeyPress);
    } else {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    }
    return () =>
      document.removeEventListener("keydown", handleEscapeKeyPress);
  }, [handleEscapeKeyPress, open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, open]);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleTabKeyPress);
    } else {
      document.removeEventListener("keydown", handleTabKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [handleEscapeKeyPress, handleTabKeyPress, open]);

  return (
    <TransitionGroup className="modal-wrapper">
      {open && (
        <CSSTransition timeout={200} classNames="modal">
          <div className={clsx("modal", classes["root"])}>
            <div
              className={clsx(classes["content"], classes[`content-${size}`])}
              ref={modalRef}
            >
              <div className={classes["header"]}>
                <h1
                  className={clsx(classes["title"], classes[`title-${size}`])}
                >
                  {title}
                </h1>
                <button onClick={closeModal}>X</button>
              </div>
              <div>{children}</div>
              {footerActions && (
                <div className={classes.footerActions}>
                  {footerActions.map((el) => (
                    <button key={el.label} onClick={el.onClick}>
                      {el.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default Modal;
