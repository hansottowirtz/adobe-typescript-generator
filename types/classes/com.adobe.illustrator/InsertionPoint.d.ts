/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class InsertionPoint extends IllustratorHostObject {
			/** All the characters in this text range. */
			public readonly characters: Characters;
			/** All the lines in this text range. */
			public readonly lines: Lines;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Paragraphs;
			/** The story of the text range. */
			public readonly story: Story;
			/** All the text in this text range. */
			public readonly textRanges: TextRanges;
			/** All the words in this text range. */
			public readonly words: Words;
		}
	}
}