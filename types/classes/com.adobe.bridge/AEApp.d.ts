/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class AEApp extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {string} suiteID
			 * @param {string} eventID
			 * @returns {void}
			 */
			public sendAE(suiteID: string, eventID: string): void;
			/**
			 * @param {string} suiteID
			 * @param {string} eventID
			 * @returns {void}
			 */
			public sendAENoReply(suiteID: string, eventID: string): void;
		}
	}
}