export function useClipboard() {
    const copy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        console.error('Failed to copy:', error);
        return false;
      }
    };
  
    return {
      copy
    };
<<<<<<< HEAD
  }
=======
  }
>>>>>>> katex-fix-2
