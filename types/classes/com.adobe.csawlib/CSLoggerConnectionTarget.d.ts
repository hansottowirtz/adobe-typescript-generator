/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>
declare namespace Adobe {
	namespace Csawlib {
		class CSLoggerConnectionTarget {
			/** Constructor. */
			public constructor(connectionName: string);
			/**
			 * Calls a logging method in a listener application with the 
			 * following parameters:
			 * 	    timeStamp, category, level, and message.
			 */
			public logEvent(event: LogEvent): void;
			public static readonly LOGGING_METHOD: any;
		}
	}
}