/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Layer extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** If true, the layer's contents and settings are locked. */
			public allLocked: boolean;
			/** The mode to use when compositing an object. */
			public blendMode: Adobe.Photoshop.BlendMode;
			/** Bounding rectangle of the Layer. */
			public readonly bounds: any[];
			/** The layers linked to this layer. */
			public readonly linkedLayers: any[];
			/** The name of the layer. */
			public name: string;
			/**
			 * The layer's master opacity (as a percentage). Range: 0.0 to 
			 * 100.0. ( 0.0 - 100.0 )
			 */
			public opacity: number;
			/** If true, the layer is visible. */
			public visible: boolean;
			/**
			 * The XMP properties of the document. The Camera RAW settings 
			 * are stored here.
			 */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 * - ( default: ElementPlacement.INSIDE )
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): Adobe.Photoshop.Layer;
			/**
			 * Links the layer with the specified layer.
			 * @param {Adobe.Photoshop.Layer} _with - The layer to link to.
			 */
			public link(_with: Adobe.Photoshop.Layer): void;
			/**
			 * move the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 * - 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Scales the object.
			 * @param {number} horizontal - The amount to scale the object 
			 * horizontally (as a percentage). ( default: 100.0 )
			 * @param {number} vertical - The amount to scale the object 
			 * vertically (as a percentage). ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to resize about. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public resize(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Rotates the object.
			 * @param {number} angle - The number of degrees to rotate the 
			 * object.
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to rotate about. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public rotate(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Moves the object relative to its current position.
			 * @param {string} deltaX - The amount to move the object 
			 * horizontally.
			 * @param {string} deltaY - The amount to move the object 
			 * vertically.
			 */
			public translate(deltaX: string, deltaY: string): void;
			/** Unlinks the layer. */
			public unlink(): void;
		}
	}
}