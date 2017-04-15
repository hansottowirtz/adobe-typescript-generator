/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The type of path. */
			public kind: Adobe.Photoshop.PathKind;
			/** The name of the path item. */
			public name: string;
			/** The sub path objects for this path item. */
			public readonly subPathItems: Adobe.Photoshop.SubPathItems;
			/** Unselects the selection, no path items are selected. */
			public deselect(): void;
			/**
			 * Duplicate this object.
			 * @param {string} name - The name for the new path.
			 */
			public duplicate(name: string): Adobe.Photoshop.PathItem;
			/**
			 * Fills the area enclosed by the path.
			 * @param {any} fillColor - The color of the fill for this 
			 * path.
			 * @param {Adobe.Photoshop.ColorBlendMode} mode - The blending 
			 * mode of the fill for this path.
			 * @param {number} opacity - The opacity of the fill for this 
			 * path (as a percentage). Range: 0.0 to 100.0.
			 * @param {boolean} preserveTransparency - If true, 
			 * transparency is preserved.
			 * @param {number} feather - The feather amount in pixels. 
			 * Range: 0.0 to 250.0.
			 * @param {boolean} antiAlias - If true, uses anti-aliasing for 
			 * the selection.
			 * @param {boolean} wholePath - If true, uses all subpaths when 
			 * doing the fill.
			 */
			public fillPath(fillColor: any, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean, feather: number, antiAlias: boolean, wholePath: boolean): void;
			/**
			 * Makes this path item the clipping path for this document.
			 * @param {number} flatness - Flatness in device pixels; tells 
			 * the PostScript printer how to approximate curves. Range: 0.2 
			 * to 100).
			 */
			public makeClippingPath(flatness: number): void;
			/**
			 * Makes a selection object, whose border is the path, from 
			 * this path item object.
			 * @param {number} feather - The feather amount in pixels. 
			 * Range: 0.0 to 250.0.
			 * @param {boolean} antiAlias - If true, the selection uses 
			 * anti-aliasing.
			 * @param {Adobe.Photoshop.SelectionType} operation - The 
			 * selection behavior relative to the existing selection (when 
			 * a selection already exists).
			 */
			public makeSelection(feather: number, antiAlias: boolean, operation: Adobe.Photoshop.SelectionType): void;
			/** delete the object */
			public remove(): void;
			/** Makes this path item the active or selected path item. */
			public select(): void;
			/**
			 * Strokes the path.
			 * @param {Adobe.Photoshop.ToolType} tool - The tool to use 
			 * when stroking the path.
			 * @param {boolean} simulatePressure - If true, simulates the 
			 * pressure when using the tool.
			 */
			public strokePath(tool: Adobe.Photoshop.ToolType, simulatePressure: boolean): void;
		}
	}
}