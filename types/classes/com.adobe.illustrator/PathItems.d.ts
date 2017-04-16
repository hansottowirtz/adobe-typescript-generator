/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of path items */
		class PathItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a path */
			public add(): Adobe.Illustrator.PathItem;
			/**
			 * Create an elliptical path item.
			 * @param {number} top the ellipse's bounds ( default: 100.0 )
			 * @param {number} left the ellipse's bounds ( default: 100.0 )
			 * @param {number} width the ellipse's bounds ( default: 50.0 )
			 * @param {number} height the height of the ellipse ( default: 
			 * 100.0 )
			 * @param {boolean} reversed is the ellipse path reversed? ( 
			 * default: false )
			 * @param {boolean} inscribed is the ellipse path inscribed? ( 
			 * default: true )
			 */
			public ellipse(top: number, left: number, width: number, height: number, reversed: boolean, inscribed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 */
			public getByName(nameParam: string): Adobe.Illustrator.PathItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.PathItem;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Used to create a regular polygon path item. Not for path 
			 * item access.
			 * @param {number} centerX ( default: 200.0 )
			 * @param {number} centerY ( default: 300.0 )
			 * @param {number} radius the radius of the polygon points ( 
			 * default: 50.0 )
			 * @param {number} sides the number of sides on the polygon ( 
			 * default: 8 )
			 * @param {boolean} reversed is the polygon path reversed? ( 
			 * default: false )
			 */
			public polygon(centerX: number, centerY: number, radius: number, sides: number, reversed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Used to create a rectangular path item. Not for path item 
			 * access.
			 * @param {number} top the top coordinate of the rectangle's 
			 * bounds
			 * @param {number} left the left coordinate of the rectangle's 
			 * bounds
			 * @param {number} width the width of the rectangle
			 * @param {number} height the height of the rectangle
			 * @param {boolean} reversed is the rectangle path reversed? ( 
			 * default: false )
			 */
			public rectangle(top: number, left: number, width: number, height: number, reversed: boolean): Adobe.Illustrator.PathItem;
			public removeAll(): void;
			/**
			 * Used to create a rounded-corner rectangular path item. Not 
			 * for path item access.
			 * @param {number} top 
			 * @param {number} left 
			 * @param {number} width 
			 * @param {number} height 
			 * @param {number} horizontalRadius horizontal corner radius ( 
			 * default: 15.0 )
			 * @param {number} verticalRadius vertical corner radius ( 
			 * default: 20.0 )
			 * @param {boolean} reversed is the rectangle path reversed? ( 
			 * default: false )
			 */
			public roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius: number, verticalRadius: number, reversed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Used to create a star-shaped path item. Not for path item 
			 * access.
			 * @param {number} centerX ( default: 200.0 )
			 * @param {number} centerY ( default: 300.0 )
			 * @param {number} radius the outside radius of the star points 
			 * ( default: 50.0 )
			 * @param {number} innerRadius the inside radius of the star 
			 * points ( default: 20.0 )
			 * @param {number} points the number of points on the star ( 
			 * default: 5 )
			 * @param {boolean} reversed is the star path reversed? ( 
			 * default: false )
			 */
			public star(centerX: number, centerY: number, radius: number, innerRadius: number, points: number, reversed: boolean): Adobe.Illustrator.PathItem;
		}
	}
}