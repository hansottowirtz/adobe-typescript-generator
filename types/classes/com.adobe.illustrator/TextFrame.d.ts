/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Text frame item */
		class TextFrame extends Adobe.Illustrator.PageItem {
			/**
			 * the position of the anchor point (start of base line for 
			 * point text)
			 */
			public anchor: any[];
			/** the type of a text anti-aliasing on text frame item */
			public antialias: Adobe.Illustrator.TextAntialias;
			/** All the characters in this text range */
			public readonly characters: Adobe.Illustrator.Characters;
			/** the column count in the text frame (area text only) */
			public columnCount: number;
			/** the column gutter in the text frame (area text only) */
			public columnGutter: number;
			/** the text contents of this text frame */
			public contents: string;
			/** the content variable bound to this text art item */
			public contentVariable: any;
			/**
			 * the end position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 */
			public endTValue: number;
			/**
			 * the first baseline offset type for text frame item (for Area 
			 * Text only)
			 */
			public firstBaseline: Adobe.Illustrator.FirstBaselineType;
			/**
			 * the first baseline offset minimum value for text frame item 
			 * (for Area Text only)
			 */
			public firstBaselineMin: number;
			/**
			 * Flow text between linked frame horizontally first. (area 
			 * text only)
			 */
			public flowLinksHorizontally: boolean;
			/** All the insertion points in this text range */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/** the type of a text frame item */
			public readonly kind: Adobe.Illustrator.TextType;
			/** All the lines in this text range */
			public readonly lines: Adobe.Illustrator.Lines;
			/** The transformation matrix of the text frame object */
			public readonly matrix: Adobe.Illustrator.Matrix;
			/** the linked text frame following this one */
			public nextFrame: Adobe.Illustrator.TextFrame;
			/** is the optical alignment active? */
			public opticalAlignment: boolean;
			/** the orientation of the text in the frame */
			public orientation: Adobe.Illustrator.TextOrientation;
			/** All the paragraphs in this text range */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/** the linked text frame preceding this one */
			public previousFrame: Adobe.Illustrator.TextFrame;
			/** the row count in the text frame (area text only) */
			public rowCount: number;
			/** the row gutter in the text frame (area text only) */
			public rowGutter: number;
			/** the amount of spacing (path text only) */
			public spacing: number;
			/**
			 * the start position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 */
			public startTValue: number;
			/** the story of the text frame */
			public readonly story: Adobe.Illustrator.Story;
			/** the path for the text frame (area and path text) */
			public readonly textPath: Adobe.Illustrator.TextPath;
			/** the text range of the text frame */
			public readonly textRange: Adobe.Illustrator.TextRange;
			/** All the text in this text range */
			public readonly textRanges: Adobe.Illustrator.TextRanges;
			/** the selected text (ranges) in the story */
			public readonly textSelection: any[];
			/** All the words in this text range */
			public readonly words: Adobe.Illustrator.Words;
			/** Convert text item to path items */
			public createOutline(): Adobe.Illustrator.GroupItem;
		}
	}
}