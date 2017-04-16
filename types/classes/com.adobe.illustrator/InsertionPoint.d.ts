/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * a location between characters, used to insert new text 
		 * objects
		 */
		class InsertionPoint extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * All the characters in this text range
			 * @type {Adobe.Illustrator.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Illustrator.Characters;
			/**
			 * All the lines in this text range
			 * @type {Adobe.Illustrator.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Illustrator.Lines;
			/**
			 * All the paragraphs in this text range
			 * @type {Adobe.Illustrator.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
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
			 * All the words in this text range
			 * @type {Adobe.Illustrator.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Illustrator.Words;
		}
	}
}