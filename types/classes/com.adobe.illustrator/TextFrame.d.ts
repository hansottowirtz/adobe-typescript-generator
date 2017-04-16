/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Text frame item */
		class TextFrame extends Adobe.Illustrator.PageItem {
			/**
			 * the position of the anchor point (start of base line for 
			 * point text)
			 * @type {any[]}
			 */
			public anchor: any[];
			/**
			 * the type of a text anti-aliasing on text frame item
			 * @type {Adobe.Illustrator.TextAntialias}
			 */
			public antialias: Adobe.Illustrator.TextAntialias;
			/**
			 * All the characters in this text range
			 * @type {Adobe.Illustrator.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Illustrator.Characters;
			/**
			 * the column count in the text frame (area text only)
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * the column gutter in the text frame (area text only)
			 * @type {number}
			 */
			public columnGutter: number;
			/**
			 * the text contents of this text frame
			 * @type {string}
			 */
			public contents: string;
			/**
			 * the content variable bound to this text art item
			 * @type {any}
			 */
			public contentVariable: any;
			/**
			 * the end position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 * @type {number}
			 */
			public endTValue: number;
			/**
			 * the first baseline offset type for text frame item (for Area 
			 * Text only)
			 * @type {Adobe.Illustrator.FirstBaselineType}
			 */
			public firstBaseline: Adobe.Illustrator.FirstBaselineType;
			/**
			 * the first baseline offset minimum value for text frame item 
			 * (for Area Text only)
			 * @type {number}
			 */
			public firstBaselineMin: number;
			/**
			 * Flow text between linked frame horizontally first. (area 
			 * text only)
			 * @type {boolean}
			 */
			public flowLinksHorizontally: boolean;
			/**
			 * All the insertion points in this text range
			 * @type {Adobe.Illustrator.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Illustrator.InsertionPoints;
			/**
			 * the type of a text frame item
			 * @type {Adobe.Illustrator.TextType}
			 * @readonly
			 */
			public readonly kind: Adobe.Illustrator.TextType;
			/**
			 * All the lines in this text range
			 * @type {Adobe.Illustrator.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Illustrator.Lines;
			/**
			 * The transformation matrix of the text frame object
			 * @type {Adobe.Illustrator.Matrix}
			 * @readonly
			 */
			public readonly matrix: Adobe.Illustrator.Matrix;
			/**
			 * the linked text frame following this one
			 * @type {Adobe.Illustrator.TextFrame}
			 */
			public nextFrame: Adobe.Illustrator.TextFrame;
			/**
			 * is the optical alignment active?
			 * @type {boolean}
			 */
			public opticalAlignment: boolean;
			/**
			 * the orientation of the text in the frame
			 * @type {Adobe.Illustrator.TextOrientation}
			 */
			public orientation: Adobe.Illustrator.TextOrientation;
			/**
			 * All the paragraphs in this text range
			 * @type {Adobe.Illustrator.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Illustrator.Paragraphs;
			/**
			 * the linked text frame preceding this one
			 * @type {Adobe.Illustrator.TextFrame}
			 */
			public previousFrame: Adobe.Illustrator.TextFrame;
			/**
			 * the row count in the text frame (area text only)
			 * @type {number}
			 */
			public rowCount: number;
			/**
			 * the row gutter in the text frame (area text only)
			 * @type {number}
			 */
			public rowGutter: number;
			/**
			 * the amount of spacing (path text only)
			 * @type {number}
			 */
			public spacing: number;
			/**
			 * the start position of text along a path, as a value relative 
			 * to the path's segments (path text only)
			 * @type {number}
			 */
			public startTValue: number;
			/**
			 * the story of the text frame
			 * @type {Adobe.Illustrator.Story}
			 * @readonly
			 */
			public readonly story: Adobe.Illustrator.Story;
			/**
			 * the path for the text frame (area and path text)
			 * @type {Adobe.Illustrator.TextPath}
			 * @readonly
			 */
			public readonly textPath: Adobe.Illustrator.TextPath;
			/**
			 * the text range of the text frame
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
			/**
			 * Convert text item to path items
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			public createOutline(): Adobe.Illustrator.GroupItem;
		}
	}
}