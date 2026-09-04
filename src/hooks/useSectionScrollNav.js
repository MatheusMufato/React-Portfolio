import { useEffect, useRef } from "react";

// Folga generosa: o scrollY máximo alcançável na prática costuma ficar
// uns 15-30px abaixo de scrollHeight - innerHeight (sub-pixel, barra de
// rolagem, scroll-behavior: smooth ainda "chegando"), então um epsilon
// de poucos pixels nunca detecta o fundo de verdade.
const EDGE_EPSILON = 24;
const WHEEL_THRESHOLD = 24;
const SWIPE_THRESHOLD = 40;
const COOLDOWN_MS = 900;

function isAtBottom() {
  return window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - EDGE_EPSILON;
}

function isAtTop() {
  return window.scrollY <= EDGE_EPSILON;
}

/**
 * Scroll híbrido entre seções: dentro de uma seção o scroll continua
 * normal (nada é bloqueado). Só ao chegar no topo/fundo do documento e
 * continuar rolando na mesma direção é que avança pra seção
 * anterior/próxima — do mesmo jeito que clicar na sidebar já faz.
 */
export function useSectionScrollNav({ enabled, onNext, onPrev }) {
  const lockedRef = useRef(false);
  const unlockTimerRef = useRef(null);
  const touchStartYRef = useRef(0);
  // onNext/onPrev trocam de identidade a cada troca de seção (o estado
  // muda, o componente renderiza de novo). Guardamos a versão mais
  // recente em ref e deixamos o efeito abaixo depender só de `enabled`,
  // senão ele desmontaria/remontaria a cada seção e cancelaria o timer
  // de destravamento no meio do caminho, prendendo o lock em `true`.
  const onNextRef = useRef(onNext);
  const onPrevRef = useRef(onPrev);

  useEffect(() => {
    onNextRef.current = onNext;
    onPrevRef.current = onPrev;
  }, [onNext, onPrev]);

  useEffect(() => {
    if (!enabled) return;

    function lockFor(ms) {
      lockedRef.current = true;
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = window.setTimeout(() => {
        lockedRef.current = false;
      }, ms);
    }

    function handleWheel(e) {
      if (lockedRef.current) return;
      if (e.deltaY > WHEEL_THRESHOLD && isAtBottom()) {
        lockFor(COOLDOWN_MS);
        onNextRef.current();
      } else if (e.deltaY < -WHEEL_THRESHOLD && isAtTop()) {
        lockFor(COOLDOWN_MS);
        onPrevRef.current();
      }
    }

    function handleTouchStart(e) {
      touchStartYRef.current = e.touches[0]?.clientY ?? 0;
    }

    function handleTouchEnd(e) {
      if (lockedRef.current) return;
      const endY = e.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const delta = touchStartYRef.current - endY;
      if (delta > SWIPE_THRESHOLD && isAtBottom()) {
        lockFor(COOLDOWN_MS);
        onNextRef.current();
      } else if (delta < -SWIPE_THRESHOLD && isAtTop()) {
        lockFor(COOLDOWN_MS);
        onPrevRef.current();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.clearTimeout(unlockTimerRef.current);
    };
  }, [enabled]);
}
