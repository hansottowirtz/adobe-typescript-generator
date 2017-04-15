/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class CSLoggerConnectionTarget extends Adobe.Mx.Logging.Targets.LineFormattedTarget {
			/** Constructor. */
			public constructor();
			/**
			 * Calls a logging method in a listener application with the 
			 * following parameters:
			 * 	    timeStamp, category, level, and message.
			 * @param {LogEvent} event - 
			 */
			public logEvent(event: LogEvent): void;
			public static readonly LOGGING_METHOD: any;
		}
	}
}