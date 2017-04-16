/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * TextRun object represents a string of characters which have 
		 * the attribute that match the TextAttrs.
		 */
		class TextRun extends Adobe.Csawlib.CSHostObject {
			/**
			 * The text contained in this TextRun object.
			 * @type {string}
			 */
			public characters: string;
			/**
			 * TextAttrs object containing the attributes of this run of 
			 * text.
			 * @type {Adobe.Flashpro.TextAttrs}
			 */
			public textAttrs: Adobe.Flashpro.TextAttrs;
		}
	}
}