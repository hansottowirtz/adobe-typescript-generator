/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A layer object */
		class Layer extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * @type {boolean}
			 */
			public allLocked: boolean;
			/**
			 * @type {Adobe.Photoshop.BlendMode}
			 */
			public blendMode: Adobe.Photoshop.BlendMode;
			/**
			 * Bounding rectangle of the Layer
			 * @type {any[]}
			 * @readonly
			 */
			public readonly bounds: any[];
			/**
			 * @type {any[]}
			 * @readonly
			 */
			public readonly linkedLayers: any[];
			/**
			 * the name of the layer
			 * @type {string}
			 */
			public name: string;
			/**
			 * master opacity of layer ( 0.0 - 100.0 )
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * XMP metadata associated with the Layer
			 * @type {Adobe.Photoshop.XmpMetadata}
			 * @readonly
			 */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 * ( default: ElementPlacement.INSIDE )
			 * @returns {Adobe.Photoshop.Layer}
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): Adobe.Photoshop.Layer;
			/**
			 * link the layer with another layer
			 * @param {Adobe.Photoshop.Layer} _with layer to link to
			 * @returns {void}
			 */
			public link(_with: Adobe.Photoshop.Layer): void;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Photoshop.ElementPlacement} insertionLocation 
			 * @returns {void}
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Photoshop.ElementPlacement): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * @param {number} horizontal percentage ( default: 100.0 )
			 * @param {number} vertical percentage ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public resize(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * @param {number} angle 
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public rotate(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * moves the position relative to its current position
			 * @param {any} deltaX horizontal transformation (unit value)
			 * @param {any} deltaY vertical transformation (unit value)
			 * @returns {void}
			 */
			public translate(deltaX: any, deltaY: any): void;
			/**
			 * unlink the layer
			 * @returns {void}
			 */
			public unlink(): void;
		}
	}
}