/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A contiguous block of text. */
		class Story extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** All the characters in this text range. */
			public readonly characters: Adobe.Illustrator.Characters;
			/** All the insertion points in this text range. */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/** The number of characters in the story. */
			public readonly length: number;
			/** All the lines in this text range. */
			public readonly lines: Adobe.Illustrator.Lines;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/** The text frame items in this story. */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			/** The text range of the story. */
			public readonly textRange: Adobe.Illustrator.TextRange;
			/** All the text in this text range. */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/** The selected text (ranges) in the story. */
			public readonly textSelection: any;
			/** All the words in this text range. */
			public readonly words: Adobe.Illustrator.Words;
		}
	}
}