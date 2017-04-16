/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

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
			 * @type {string}
			 */
			public body: string;
			/**
			 * default is null. Set the message to be sent to the target 
			 * application. Normally, this will either be JS API or 
			 * Extendscript, depending on the language supported by the 
			 * target application.
			 * @type {string}
			 */
			public message: string;
			/**
			 * default = null. Set the target application's application 
			 * specifier string prior to sending a BridgeTalk message.
			 * @type {string}
			 */
			public target: string;
			/**
			 * Sends the BridgeTalk message to the target application.
			 * @returns {boolean}
			 */
			public send(): boolean;
		}
	}
}