export type ActionMap<PayloadMap extends Record<string, unknown>> = {
  [Event in keyof PayloadMap]: PayloadMap[Event] extends undefined
    ? {
        type: Event;
      }
    : {
        type: Event;
        payload: PayloadMap[Event];
      };
};
