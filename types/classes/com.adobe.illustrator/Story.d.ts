/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** a contiguous block of text */
		class Story extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * All the characters in this text range
			 * @type {Adobe.Illustrator.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Illustrator.Characters;
			/**
			 * All the insertion points in this text range
			 * @type {Adobe.Illustrator.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/**
			 * the number of characters in the story
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
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
			 * The text frame items in this story
			 * @type {Adobe.Illustrator.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			/**
			 * the text range of the story
			 * @type {Adobe.Illustrator.TextRange}
			 * @readonly
			 */
			public readonly textRange: Adobe.Illustrator.TextRange;
			/**
			 * All the text in this text range
			 * @type {Adobe.Illustrator.TextRanges}
			 * @readonly
			 */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/**
			 * the selected text (ranges) in the story
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
		}
	}
}