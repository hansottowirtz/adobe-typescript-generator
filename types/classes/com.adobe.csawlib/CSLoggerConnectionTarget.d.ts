/// <reference path="../../namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/**  A logging target that uses LocalConnection   */
		class CSLoggerConnectionTarget extends Adobe.Mx.Logging.Targets.LineFormattedTarget {
			/** Constructor. */
			public constructor();
			/**
			 * Calls a logging method in a listener application with the 
			 * following parameters:
			 * 	    timeStamp, category, level, and message.
			 * @param {LogEvent} event
			 */
			public logEvent(event: LogEvent): void;
			public static readonly LOGGING_METHOD: any;
		}
	}
}