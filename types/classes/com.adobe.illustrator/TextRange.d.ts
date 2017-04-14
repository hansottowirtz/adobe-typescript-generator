/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextRange extends IllustratorHostObject {
			/** The character properties for the text range. */
			public readonly characterAttributes: CharacterAttributes;
			/**
			 * Offset of the first character of the range from the 
			 * beginning of the story, in characters.
			 */
			public characterOffset: number;
			/** All the characters in this text range. */
			public readonly characters: Characters;
			/** List of referenced character styles in the text range. */
			public readonly characterStyles: CharacterStyles;
			/** The text string. */
			public contents: string;
			/** All the insertion points in this text range. */
			public readonly insertionPoints: InsertionPoints;
			/** Controls the spacing between two characters (in milli-ems) */
			public kerning: number;
			/** Length of text range. ( minimum 0 ) */
			public length: number;
			/** All the lines in this text range. */
			public readonly lines: Lines;
			/** The paragraph properties for the text range. */
			public readonly paragraphAttributes: ParagraphAttributes;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Paragraphs;
			/** List of referenced paragraph styles in the text range. */
			public readonly paragraphStyles: ParagraphStyles;
			/** The story of the text range. */
			public readonly story: Story;
			/** All the text in this text range. */
			public readonly textRanges: TextRanges;
			/** The selected text (ranges) in the text range. */
			public readonly textSelection: any;
			/** All the words in this text range. */
			public readonly words: Words;
			/** Change the capitalization of text. */
			public changeCaseTo(_type: CaseChangeType): void;
			/** Deselect the text range. */
			public deSelect(): void;
			/** create a duplicate of the object */
			public duplicate(relativeObject: any, insertionLocation: ElementPlacement): TextRange;
			/** move the object */
			public move(relativeObject: any, insertionLocation: ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/** Select the text range. */
			public select(addToDocument: boolean): void;
		}
	}
}