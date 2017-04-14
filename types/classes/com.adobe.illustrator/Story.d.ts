/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Story extends IllustratorHostObject {
			/** All the characters in this text range. */
			public readonly characters: Characters;
			/** All the insertion points in this text range. */
			public readonly insertionPoints: InsertionPoints;
			/** The number of characters in the story. */
			public readonly length: number;
			/** All the lines in this text range. */
			public readonly lines: Lines;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Paragraphs;
			/** The text frame items in this story. */
			public readonly textFrames: TextFrames;
			/** The text range of the story. */
			public readonly textRange: TextRange;
			/** All the text in this text range. */
			public readonly textRanges: TextRanges;
			/** The selected text (ranges) in the story. */
			public readonly textSelection: any;
			/** All the words in this text range. */
			public readonly words: Words;
		}
	}
}