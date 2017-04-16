/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The SwfPanel object represent a single SWF Panel. The 
		 * SwfPanel object contains properties related that panel, 
		 * which is located in the Configuration/WindowSWF folder. The 
		 * array of SWF Panels can be accessed from fl.swfPanels
		 */
		class SwfPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * The name of the currently selected panel
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * A JSFL script which will be executed when the SWF panel is 
			 * closing. This is a convenient place for the scripter to add 
			 * clean up code.
			 * @type {string}
			 */
			public onCloseScript: string;
			/**
			 * The disk path to the SWF used in the currently selected 
			 * panel
			 * @type {string}
			 * @readonly
			 */
			public readonly path: string;
			/**
			 * Method for calling an AS3 function exposed via 
			 * ExternalInterface. This method uses the ExternalInterface 
			 * XML remote procedure call protocol.
			 * @returns {void}
			 */
			public call(): void;
			/**
			 * Sets the keyboard focus to the SWF panel.
			 * @returns {void}
			 */
			public setFocus(): void;
		}
	}
}