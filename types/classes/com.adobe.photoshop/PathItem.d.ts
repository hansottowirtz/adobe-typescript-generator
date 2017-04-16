/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An artwork path item */
		class PathItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 */
			public kind: Adobe.Photoshop.PathKind;
			/**
			 * the name of the path item
			 * @type {string}
			 */
			public name: string;
			/**
			 * sub items for this path item
			 * @type {Adobe.Photoshop.SubPathItems}
			 * @readonly
			 */
			public readonly subPathItems: Adobe.Photoshop.SubPathItems;
			/**
			 * unselect this path item, no paths items are selected
			 * @returns {void}
			 */
			public deselect(): void;
			/**
			 * duplicate this path
			 * @param {string} name name for the new path
			 * @returns {Adobe.Photoshop.PathItem}
			 */
			public duplicate(name: string): Adobe.Photoshop.PathItem;
			/**
			 * fill the path with the following information
			 * @param {any} fillColor color of the fill for this path
			 * @param {Adobe.Photoshop.ColorBlendMode} mode blending mode 
			 * of the fill for this path
			 * @param {number} opacity opacity of the fill for this path
			 * @param {boolean} preserveTransparency preserve the 
			 * transparency of the file for this path
			 * @param {number} feather the feather amount in pixels
			 * @param {boolean} antiAlias use anti aliasing for the 
			 * selection
			 * @param {boolean} wholePath use all subpaths when doing fill
			 * @returns {void}
			 */
			public fillPath(fillColor: any, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean, feather: number, antiAlias: boolean, wholePath: boolean): void;
			/**
			 * make this path item the clipping path for this document
			 * @param {number} flatness Flatness in device pixels.  Tells 
			 * the PostScript printer how to approximate curves. (0.2 - 
			 * 100).
			 * @returns {void}
			 */
			public makeClippingPath(flatness: number): void;
			/**
			 * make a selection from this path
			 * @param {number} feather the feather amount in pixels
			 * @param {boolean} antiAlias use anti aliasing for the 
			 * selection
			 * @param {Adobe.Photoshop.SelectionType} operation the 
			 * operation mode for the selection
			 * @returns {void}
			 */
			public makeSelection(feather: number, antiAlias: boolean, operation: Adobe.Photoshop.SelectionType): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * make this path item the active or selected path item
			 * @returns {void}
			 */
			public select(): void;
			/**
			 * stroke the path with the following information
			 * @param {Adobe.Photoshop.ToolType} tool tool to use when 
			 * stroking the path
			 * @param {boolean} simulatePressure simulate the pressure when 
			 * using the tool
			 * @returns {void}
			 */
			public strokePath(tool: Adobe.Photoshop.ToolType, simulatePressure: boolean): void;
		}
	}
}