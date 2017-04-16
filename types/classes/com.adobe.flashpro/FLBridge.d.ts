/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The FLBridge object allows Flash to communicate with other 
		 * BridgeTalk enabled applications. This is a dynamic object 
		 * that the scripter creates.
		 */
		class FLBridge extends Adobe.Csawlib.CSHostObject {
			/**
			 * gives focus and brings to the fore an application. Internal 
			 * Only. Undocumented.
			 * @param {string} appSpecifier BridgeTalk application 
			 * specifier for app to bring to front.
			 */
			public bringToFront(appSpecifier: string): boolean;
			/**
			 * Initializes BridgeTalk in the Flash application. 
			 * (Only called internally by Flash application.) Internal 
			 * Only. Undocumented.
			 */
			public init(): boolean;
			/**
			 * Checks if application corresponding to appSpecifier is 
			 * installed. Internal Only. Undocumented.
			 * @param {string} appSpecifier BridgeTalk application 
			 * specifier for app to check.
			 */
			public isInstalled(appSpecifier: string): boolean;
			/**
			 * Checks if application corresponding to BridgeTalk 
			 * appSpecifier is currently running. Internal Only. 
			 * Undocumented.
			 * @param {string} appSpecifier BridgeTalk application 
			 * specifier for app to check.
			 */
			public isRunning(appSpecifier: string): boolean;
			/**
			 * Tells BridgeTalk to launch the specified application. 
			 * Internal Only. Undocumented.
			 * @param {string} appSpec the bridgetalk app spec for the app 
			 * you are launching
			 * @param {string} cmdLine optional command line string to pass 
			 * to the target app being launched
			 */
			public launch(appSpec: string, cmdLine: string): boolean;
			/** Check the BridgeTalk message queue for incoming messages. */
			public pump(): boolean;
		}
	}
}