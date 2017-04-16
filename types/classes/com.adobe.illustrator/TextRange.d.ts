/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** a range of characters from a text item */
		class TextRange extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the character properties for the text range
			 * @type {Adobe.Illustrator.CharacterAttributes}
			 * @readonly
			 */
			public readonly characterAttributes: Adobe.Illustrator.CharacterAttributes;
			/**
			 * offset of the first character of the range from the 
			 * beginning of the story, in characters.
			 * @type {number}
			 */
			public characterOffset: number;
			/**
			 * All the characters in this text range
			 * @type {Adobe.Illustrator.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Illustrator.Characters;
			/**
			 * list of referenced character styles in the text range
			 * @type {Adobe.Illustrator.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Illustrator.CharacterStyles;
			/**
			 * the text string
			 * @type {string}
			 */
			public contents: string;
			/**
			 * All the insertion points in this text range
			 * @type {Adobe.Illustrator.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/**
			 * controls the spacing between two characters (in milli-ems)
			 * @type {number}
			 */
			public kerning: number;
			/**
			 * length of text range ( minimum 0 )
			 * @type {number}
			 */
			public length: number;
			/**
			 * All the lines in this text range
			 * @type {Adobe.Illustrator.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Illustrator.Lines;
			/**
			 * the paragraph properties for the text range
			 * @type {Adobe.Illustrator.ParagraphAttributes}
			 * @readonly
			 */
			public readonly paragraphAttributes: Adobe.Illustrator.ParagraphAttributes;
			/**
			 * All the paragraphs in this text range
			 * @type {Adobe.Illustrator.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/**
			 * list of referenced paragraph styles in the text range
			 * @type {Adobe.Illustrator.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Illustrator.ParagraphStyles;
			/**
			 * the story of the text range
			 * @type {Adobe.Illustrator.Story}
			 * @readonly
			 */
			public readonly story: Adobe.Illustrator.Story;
			/**
			 * All the text in this text range
			 * @type {Adobe.Illustrator.TextRanges}
			 * @readonly
			 */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/**
			 * the selected text (ranges) in the text range
			 * @type {any[]}
			 * @readonly
			 */
			public readonly textSelection: any[];
			/**
			 * All the words in this text range
			 * @type {Adobe.Illustrator.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Illustrator.Words;
			/**
			 * change the capitalization of text
			 * @param {Adobe.Illustrator.CaseChangeType} _type the type of 
			 * case
			 * @returns {void}
			 */
			public changeCaseTo(_type: Adobe.Illustrator.CaseChangeType): void;
			/**
			 * deselect the text range
			 * @returns {void}
			 */
			public deSelect(): void;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation ( default: ElementPlacement.INSIDE )
			 * @returns {Adobe.Illustrator.TextRange}
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.TextRange;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation 
			 * @returns {void}
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * select the text range
			 * @param {boolean} addToDocument whether to add the text range 
			 * to the document text selection ( default: false )
			 * @returns {void}
			 */
			public select(addToDocument: boolean): void;
		}
	}
}