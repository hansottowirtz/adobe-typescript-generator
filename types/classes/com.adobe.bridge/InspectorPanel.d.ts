/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class InspectorPanel extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public displayInInspector: boolean;
			/** This is not a Property Description. */
			public readonly displayTitle: string;
			/** This is not a Property Description. */
			public readonly flyoutMenuId: string;
			/** This is not a Property Description. */
			public minimized: boolean;
			/** This is not a Property Description. */
			public readonly panelettes: any[];
			/** This is not a Property Description. */
			public sortPosition: number;
			/** This is not a Property Description. */
			public title: string;
			/** This is not a Property Description. */
			public readonly visible: boolean;
			/** This is not a Property Description. */
			public wide: boolean;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args - 
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {any} panelette - 
			 */
			public registerPanelette(panelette: any): boolean;
			/**
			 * This is not a Method Description.
			 * @param {any} panelette - 
			 */
			public unregisterPanelette(panelette: any): boolean;
		}
	}
}