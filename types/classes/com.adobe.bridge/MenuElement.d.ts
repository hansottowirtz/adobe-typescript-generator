/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class MenuElement extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public readonly altDown: boolean;
			/** This is not a Property Description. */
			public readonly canBeChecked: boolean;
			/** This is not a Property Description. */
			public checked: boolean;
			/** This is not a Property Description. */
			public readonly cmdDown: boolean;
			/** This is not a Property Description. */
			public readonly ctrlDown: boolean;
			/** This is not a Property Description. */
			public enabled: boolean;
			/** This is not a Property Description. */
			public readonly id: string;
			/** This is not a Property Description. */
			public readonly location: string;
			/** This is not a Property Description. */
			public readonly optionDown: boolean;
			/** This is not a Property Description. */
			public separatorAfter: boolean;
			/** This is not a Property Description. */
			public separatorBefore: boolean;
			/** This is not a Property Description. */
			public readonly shiftDown: boolean;
			/** This is not a Property Description. */
			public text: string;
			/** This is not a Property Description. */
			public readonly type: string;
			/** This is not a Method Description. */
			public constructor();
			/**
			 * This is not a Method Description.
			 * @param {string} _type - 
			 * @param {string} text - 
			 * @param {string} location - 
			 * @param {string} id - 
			 */
			public create(_type: string, text: string, location: string, id: string): Adobe.Bridge.MenuElement;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {string} id - 
			 */
			public find(id: string): Adobe.Bridge.MenuElement;
			/**
			 * This is not a Method Description.
			 * @param {string} id - 
			 */
			public remove(id: string): void;
		}
	}
}