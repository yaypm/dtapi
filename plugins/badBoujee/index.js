'use strict';

/**
 * The DavisWeather class is the core of the plugin and an
 * instance of DavisWeather is what will be loaded into Davis
 */
class BadBoujee {

  /**
   * The main body of work is done in the constructor.
   */
  constructor(davis, options) {
    this.davis = davis;
    this.options = options;

    // This is where we declare our intents.
    this.intents = {
      // Our intent name
      badBoujee: {
        // A basic description of the intent
        usage: 'Get bad',

        // Phrases that will trigger our intent. Note that they will not
        // need to be matched exactly in order for the intent to run.
        phrases: [
          'Rain drops',
        ],

        // Lifecycle Events are friendly names for the steps that an intent
        // needs to take in order to run successfully. For instance, our intent
        // will need to gather data from the weather underground API, then will
        // need to respond to the user, so I have broken it up into those events.
        lifecycleEvents: [
          'gatherData',
          'respond',
        ],
      },
    };

    // Hooks give intents functionality.
    // They are called serially when an intent is run.
    // They are named using the 'intentName:lifecycleEvent'
    // Each hook is called with 2 arguments: the exchange object,
    // and a context object. The exchange object is the primary
    // interface between Davis, a user, and a plugin. The context
    // object holds any state carried over from previous exchanges.
    this.hooks = {
      'badBoujee:gatherData': (exchange, context) => null,
      'badBoujee:respond': (exchange, context) => {
        const resp = 'Drop tops. Smoking no Kush in the hot box.';

        exchange
          .response(resp) // respond to the user
          //.setTarget('performFollowup');   
          .skipFollowUp();
          //return this.davis.pluginManager.run(exchange, 'performFollowup');
          //.smartEnd(); // end the conversation if appropriate
      },
    };
  }
}

// export the plugin so it can be used
module.exports = BadBoujee;
