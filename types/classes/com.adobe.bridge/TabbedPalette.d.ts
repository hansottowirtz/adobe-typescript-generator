/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class TabbedPalette extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public readonly content: any;
			/** This is not a Property Description. */
			public id: string;
			/** This is not a Property Description. */
			public showMenuItem: boolean;
			/** This is not a Property Description. */
			public title: string;
			/** This is not a Property Description. */
			public readonly type: string;
			/** This is not a Property Description. */
			public url: string;
			/** This is not a Property Description. */
			public visible: boolean;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * @param {any[]} args - 
			 */
			protected createWithArgs(args: any[]): void;
			/** This is not a Method Description. */
			public remove(): void;
			/** This is not a Method Description. */
			public setLocation(): void;
		}
	}
}