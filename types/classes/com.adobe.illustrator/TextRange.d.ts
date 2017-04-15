/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A range of characters from a text item. */
		class TextRange extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The character properties for the text range. */
			public readonly characterAttributes: Adobe.Illustrator.CharacterAttributes;
			/**
			 * Offset of the first character of the range from the 
			 * beginning of the story, in characters.
			 */
			public characterOffset: number;
			/** All the characters in this text range. */
			public readonly characters: Adobe.Illustrator.Characters;
			/** List of referenced character styles in the text range. */
			public readonly characterStyles: Adobe.Illustrator.CharacterStyles;
			/** The text string. */
			public contents: string;
			/** All the insertion points in this text range. */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/** Controls the spacing between two characters (in milli-ems) */
			public kerning: number;
			/** Length of text range. ( minimum 0 ) */
			public length: number;
			/** All the lines in this text range. */
			public readonly lines: Adobe.Illustrator.Lines;
			/** The paragraph properties for the text range. */
			public readonly paragraphAttributes: Adobe.Illustrator.ParagraphAttributes;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/** List of referenced paragraph styles in the text range. */
			public readonly paragraphStyles: Adobe.Illustrator.ParagraphStyles;
			/** The story of the text range. */
			public readonly story: Adobe.Illustrator.Story;
			/** All the text in this text range. */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/** The selected text (ranges) in the text range. */
			public readonly textSelection: any;
			/** All the words in this text range. */
			public readonly words: Adobe.Illustrator.Words;
			/**
			 * Change the capitalization of text.
			 * @param {Adobe.Illustrator.CaseChangeType} _type - The type 
			 * of case.
			 */
			public changeCaseTo(_type: Adobe.Illustrator.CaseChangeType): void;
			/** Deselect the text range. */
			public deSelect(): void;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation - ( default: ElementPlacement.INSIDE )
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.TextRange;
			/**
			 * move the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation - 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Select the text range.
			 * @param {boolean} addToDocument - Whether to add the text 
			 * range to the document text selection. ( default: false )
			 */
			public select(addToDocument: boolean): void;
		}
	}
}