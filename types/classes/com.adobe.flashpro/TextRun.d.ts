/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * TextRun object represents a string of characters which have 
		 * the attribute that match the TextAttrs.
		 */
		class TextRun extends Adobe.Csawlib.CSHostObject {
			/** The text contained in this TextRun object. */
			public characters: string;
			/**
			 * TextAttrs object containing the attributes of this run of 
			 * text.
			 */
			public textAttrs: Adobe.Flashpro.TextAttrs;
		}
	}
}