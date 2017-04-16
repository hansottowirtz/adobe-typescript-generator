/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A layer object */
		class Layer extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			public allLocked: boolean;
			public blendMode: Adobe.Photoshop.BlendMode;
			/** Bounding rectangle of the Layer */
			public readonly bounds: any[];
			public readonly linkedLayers: any[];
			/** the name of the layer */
			public name: string;
			/** master opacity of layer ( 0.0 - 100.0 ) */
			public opacity: number;
			public visible: boolean;
			/** XMP metadata associated with the Layer */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 * ( default: ElementPlacement.INSIDE )
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): Adobe.Photoshop.Layer;
			/**
			 * link the layer with another layer
			 * @param {Adobe.Photoshop.Layer} _with layer to link to
			 */
			public link(_with: Adobe.Photoshop.Layer): void;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * @param {number} horizontal percentage ( default: 100.0 )
			 * @param {number} vertical percentage ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 */
			public resize(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * @param {number} angle 
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 */
			public rotate(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * moves the position relative to its current position
			 * @param {any} deltaX horizontal transformation (unit value)
			 * @param {any} deltaY vertical transformation (unit value)
			 */
			public translate(deltaX: any, deltaY: any): void;
			/** unlink the layer */
			public unlink(): void;
		}
	}
}