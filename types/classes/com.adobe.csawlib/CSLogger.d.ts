/// <reference path="../../namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/**
		 *  Class to make it trivially easy to log information-  just 
		 * use the ILogger acquired by CSLogger.getInstance(), see 
		 * ILogger API in Flex docs. 
		 */
		class CSLogger {
			public getInstance(): ILogger;
		}
	}
}