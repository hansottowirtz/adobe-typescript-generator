/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of text frame items */
		class TextFrames extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a point text frame item
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			public add(): Adobe.Illustrator.TextFrame;
			/**
			 * Create an area text frame item.
			 * @param {Adobe.Illustrator.PathItem} textPath the path item 
			 * associated with the text frame
			 * @param {Adobe.Illustrator.TextOrientation} orientation the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 * @param {Adobe.Illustrator.TextFrame} baseFrame the base text 
			 * frame if it has one
			 * @param {boolean} postFix whether to postfix/prefix the new 
			 * text frame to the specified base text frame ( default: true 
			 * )
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			public areaText(textPath: Adobe.Illustrator.PathItem, orientation: Adobe.Illustrator.TextOrientation, baseFrame: Adobe.Illustrator.TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.TextFrame;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			[idx: number]: Adobe.Illustrator.TextFrame;
			/**
			 * Create an on-path text frame item.
			 * @param {Adobe.Illustrator.PathItem} textPath the path item 
			 * associated with the text frame
			 * @param {number} startTValue the start position of text along 
			 * a path, as a value relative to the path's segments (path 
			 * text only) ( default: 0.0 )
			 * @param {number} endTValue the end position of text along a 
			 * path, as a value relative to the path's segments (path text 
			 * only) ( default: 0.0 )
			 * @param {Adobe.Illustrator.TextOrientation} orientation the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 * @param {Adobe.Illustrator.TextFrame} baseFrame the base text 
			 * frame if it has one
			 * @param {boolean} postFix whether to postfix/prefix the new 
			 * text frame to the specified base text frame ( default: true 
			 * )
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			public pathText(textPath: Adobe.Illustrator.PathItem, startTValue: number, endTValue: number, orientation: Adobe.Illustrator.TextOrientation, baseFrame: Adobe.Illustrator.TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/**
			 * Create a point text frame item.
			 * @param {any[]} anchor the position (coordinates) of the 
			 * anchor point
			 * @param {Adobe.Illustrator.TextOrientation} orientation the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 * @returns {Adobe.Illustrator.TextFrame}
			 */
			public pointText(anchor: any[], orientation: Adobe.Illustrator.TextOrientation): Adobe.Illustrator.TextFrame;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}