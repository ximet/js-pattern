class Observer {
  constructor() {
      this.observers = [];
  }

  subscribe (observer, context) {
    const currentContext = context || null;
    this.observers.push({observer: observer, context: currentContext})
  }

  unsubscribe (observer, context) {
    this.observers.filter(item => item.observer !== observer && item.context !== context)
  }

  notify (data) {
    this.observers.map(item => item.obserer.call(item.context, data));
  }
}
