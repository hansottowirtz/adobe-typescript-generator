/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextFrame extends PageItem {
			/**
			 * The position of the anchor point (start of base line for 
			 * point text)
			 */
			public anchor: any[];
			/** All the characters in this text range. */
			public readonly characters: Characters;
			/** The column count in the text frame (area text only) */
			public columnCount: number;
			/** The column gutter in the text frame (area text only) */
			public columnGutter: number;
			/** The text contents of this text frame. */
			public contents: string;
			/** The content variable bound to this text art item. */
			public contentVariable: any;
			/**
			 * The end position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 */
			public endTValue: number;
			/**
			 * Flow text between linked frame horizontally first. (area 
			 * text only)
			 */
			public flowLinksHorizontally: boolean;
			/** All the insertion points in this text range. */
			public readonly insertionPoints: InsertionPoints;
			/** The type of a text frame item. */
			public readonly kind: TextType;
			/** All the lines in this text range. */
			public readonly lines: Lines;
			/** The transformation matrix of the text frame object. */
			public readonly matrix: Matrix;
			/** The linked text frame following this one. */
			public nextFrame: TextFrame;
			/** Is the optical alignment active? */
			public opticalAlignment: boolean;
			/** The orientation of the text in the frame. */
			public orientation: TextOrientation;
			/** All the paragraphs in this text range. */
			public readonly paragraphs: Paragraphs;
			/** The linked text frame preceding this one. */
			public previousFrame: TextFrame;
			/** The row count in the text frame (area text only) */
			public rowCount: number;
			/** The row gutter in the text frame (area text only) */
			public rowGutter: number;
			/** The amount of spacing (path text only) */
			public spacing: number;
			/**
			 * The start position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 */
			public startTValue: number;
			/** The story of the text frame. */
			public readonly story: Story;
			/** The path for the text frame (area and path text) */
			public readonly textPath: TextPath;
			/** The text range of the text frame. */
			public readonly textRange: TextRange;
			/** All the text in this text range. */
			public readonly textRanges: TextRanges;
			/** The selected text (ranges) in the story. */
			public readonly textSelection: any;
			/** All the words in this text range. */
			public readonly words: Words;
			/** Convert text item to path items. */
			public createOutline(): GroupItem;
		}
	}
}