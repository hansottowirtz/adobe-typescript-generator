/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class InsertionPoint extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** All the characters in this text range. */
			public readonly characters: Adobe.Illustrator.Characters;
			/** All the lines in this text range. */
			public readonly lines: Adobe.Illustrator.Lines;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/** The story of the text range. */
			public readonly story: Adobe.Illustrator.Story;
			/** All the text in this text range. */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/** All the words in this text range. */
			public readonly words: Adobe.Illustrator.Words;
		}
	}
}