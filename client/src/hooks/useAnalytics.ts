/**
 * Custom hook para rastreamento de eventos com Umami Analytics
 * Permite rastrear visualizações de páginas, cliques em botões e eventos customizados
 */

export function useAnalytics() {
  const trackEvent = (eventName: string, eventData?: Record<string, string | number>) => {
    // Umami analytics é carregado globalmente via script tag
    try {
      if (typeof window !== "undefined" && (window as any).umami && typeof (window as any).umami.trackEvent === "function") {
        (window as any).umami.trackEvent(eventName, eventData);
      }
    } catch (error) {
      // Silently fail if Umami is not available
      console.debug("Analytics not available:", error);
    }
  };

  const trackPageView = (pageName: string) => {
    // Rastreia visualização de página
    try {
      if (typeof window !== "undefined" && (window as any).umami && typeof (window as any).umami.trackEvent === "function") {
        (window as any).umami.trackEvent(`page_view_${pageName}`);
      }
    } catch (error) {
      console.debug("Analytics not available:", error);
    }
  };

  const trackServiceView = (serviceName: string) => {
    // Rastreia visualização de serviço específico
    trackEvent("service_viewed", {
      service: serviceName,
      timestamp: new Date().getTime(),
    });
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    // Rastreia envio de formulário
    trackEvent("form_submitted", {
      form: formName,
      success: success ? 1 : 0,
    });
  };

  const trackCTAClick = (ctaName: string, location: string) => {
    // Rastreia cliques em call-to-action
    trackEvent("cta_clicked", {
      cta: ctaName,
      location: location,
    });
  };

  const trackCarouselInteraction = (action: string, testimonialIndex: number) => {
    // Rastreia interações com carrossel de depoimentos
    trackEvent("carousel_interaction", {
      action: action,
      index: testimonialIndex,
    });
  };

  const trackServiceCardClick = (serviceName: string) => {
    // Rastreia cliques em cards de serviço
    trackEvent("service_card_clicked", {
      service: serviceName,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackServiceView,
    trackFormSubmission,
    trackCTAClick,
    trackCarouselInteraction,
    trackServiceCardClick,
  };
}
