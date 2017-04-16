/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The BridgeTalk object. This Object is somewhat unique for 
		 * JSAPI in that users have to create a new instance of the 
		 * Object to use it.
		 */
		class BridgeTalk extends Adobe.Csawlib.CSHostObject {
			/**
			 * The JS API or Extendscript message to be sent to the target 
			 * application.
			 */
			public body: string;
			/**
			 * default is null. Set the message to be sent to the target 
			 * application. Normally, this will either be JS API or 
			 * Extendscript, depending on the language supported by the 
			 * target application.
			 */
			public message: string;
			/**
			 * default = null. Set the target application's application 
			 * specifier string prior to sending a BridgeTalk message.
			 */
			public target: string;
			/** Sends the BridgeTalk message to the target application. */
			public send(): boolean;
		}
	}
}