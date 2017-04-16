/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/** A logging target that uses LocalConnection */
		class CSLoggerConnectionTarget extends Adobe.Mx.Logging.Targets.LineFormattedTarget {
			/**
			 * Constructor.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Calls a logging method in a listener application with the 
			 * following parameters:
			 * 	    timeStamp, category, level, and message.
			 * @param {Adobe.Flex.LogEvent} event
			 * @returns {void}
			 */
			public logEvent(event: Adobe.Flex.LogEvent): void;
			/**
			 * @type {void}
			 */
			public static readonly LOGGING_METHOD: any;
		}
	}
}