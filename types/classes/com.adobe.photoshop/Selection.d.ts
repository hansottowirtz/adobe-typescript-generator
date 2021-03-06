/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The selection of the document */
		class Selection extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * bounding rectangle of the entire selection
			 * @type {any[]}
			 * @readonly
			 */
			public readonly bounds: any[];
			/**
			 * is the bounding rectangle a solid rectangle
			 * @type {boolean}
			 * @readonly
			 */
			public readonly solid: boolean;
			/**
			 * clear selection
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * contracts the selection
			 * @param {any} by distance to contract the selection by (unit 
			 * value)
			 * @returns {void}
			 */
			public contract(by: any): void;
			/**
			 * copy selection to the clipboard
			 * @param {boolean} merge if true the copy includes all visible 
			 * layers. If false the copy only copies from the current layer
			 * @returns {void}
			 */
			public copy(merge: boolean): void;
			/**
			 * cut current selection to the clipboard
			 * @returns {void}
			 */
			public cut(): void;
			/**
			 * @returns {void}
			 */
			public deselect(): void;
			/**
			 * expand selection
			 * @param {any} by distance to expand the selection by (unit 
			 * value)
			 * @returns {void}
			 */
			public expand(by: any): void;
			/**
			 * feather edges of selection
			 * @param {any} by amount to feather the edge by (unit value)
			 * @returns {void}
			 */
			public feather(by: any): void;
			/**
			 * fills the selection
			 * @param {any} fillType a color or a history state
			 * @param {Adobe.Photoshop.ColorBlendMode} mode ( default: 
			 * ColorBlendMode.NORMAL )
			 * @param {number} opacity ( default: 100 )
			 * @param {boolean} preserveTransparency 
			 * @returns {void}
			 */
			public fill(fillType: any, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean): void;
			/**
			 * grow selection to include all adjacent pixels falling within 
			 * the specified tolerance range
			 * @param {number} tolerance ( 0 - 255 )
			 * @param {boolean} antiAlias 
			 * @returns {void}
			 */
			public grow(tolerance: number, antiAlias: boolean): void;
			/**
			 * invert the selection
			 * @returns {void}
			 */
			public invert(): void;
			/**
			 * load the selection from a channel
			 * @param {Adobe.Photoshop.Channel} _from the channel to load 
			 * the selection from
			 * @param {Adobe.Photoshop.SelectionType} combination how to 
			 * combine the channel contents with the existing selection ( 
			 * default: SelectionType.REPLACE )
			 * @param {boolean} inverting select the inverse of the channel 
			 * contents? ( default: false )
			 * @returns {void}
			 */
			public load(_from: Adobe.Photoshop.Channel, combination: Adobe.Photoshop.SelectionType, inverting: boolean): void;
			/**
			 * make this selection item the work path for this document
			 * @param {number} tolerance tolerance in pixels
			 * @returns {void}
			 */
			public makeWorkPath(tolerance: number): void;
			/**
			 * @param {number} horizontal percentage ( default: 100.0 )
			 * @param {number} vertical percentage ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * scale about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public resize(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * scale the boundary of selection
			 * @param {number} horizontal percentage ( default: 100.0 )
			 * @param {number} vertical percentage ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * scale about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public resizeBoundary(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * @param {number} angle 
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public rotate(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * rotates the boundary of selection
			 * @param {number} angle 
			 * @param {Adobe.Photoshop.AnchorPosition} anchor point to 
			 * rotate about ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
			 */
			public rotateBoundary(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * @param {any[]} region list of corners of the selection (in 
			 * pixels)
			 * @param {Adobe.Photoshop.SelectionType} _type how to combine 
			 * the new selection with the existing selection ( default: 
			 * SelectionType.REPLACE )
			 * @param {number} feather feather amount ( default: 0.0 )
			 * @param {boolean} antiAlias whether to use antialiasing ( 
			 * default: true )
			 * @returns {void}
			 */
			public select(region: any[], _type: Adobe.Photoshop.SelectionType, feather: number, antiAlias: boolean): void;
			/**
			 * @returns {void}
			 */
			public selectAll(): void;
			/**
			 * select the border of the selection
			 * @param {any} width width of border selection (unit value)
			 * @returns {void}
			 */
			public selectBorder(width: any): void;
			/**
			 * grow selection to include pixels throughout the image 
			 * falling within the tolerance range
			 * @param {number} tolerance 
			 * @param {boolean} antiAlias 
			 * @returns {void}
			 */
			public similar(tolerance: number, antiAlias: boolean): void;
			/**
			 * @param {number} radius sample radius in pixels ( 0 - 100 )
			 * @returns {void}
			 */
			public smooth(radius: number): void;
			/**
			 * save the selection as a channel
			 * @param {Adobe.Photoshop.Channel} into the channel to save 
			 * the selection to
			 * @param {Adobe.Photoshop.SelectionType} combination how to 
			 * add the selection to the existing contents of the channel ( 
			 * default: SelectionType.REPLACE )
			 * @returns {void}
			 */
			public store(into: Adobe.Photoshop.Channel, combination: Adobe.Photoshop.SelectionType): void;
			/**
			 * strokes the selection
			 * @param {any} strokeColor color to stroke selection with
			 * @param {number} width width of stroke (in pixels)
			 * @param {Adobe.Photoshop.StrokeLocation} location ( default: 
			 * StrokeLocation.CENTER )
			 * @param {Adobe.Photoshop.ColorBlendMode} mode ( default: 
			 * ColorBlendMode.NORMAL )
			 * @param {number} opacity ( default: 100 )
			 * @param {boolean} preserveTransparency 
			 * @returns {void}
			 */
			public stroke(strokeColor: any, width: number, location: Adobe.Photoshop.StrokeLocation, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean): void;
			/**
			 * moves the position relative to its current position
			 * @param {any} deltaX horizontal transformation (unit value)
			 * @param {any} deltaY vertical transformation (unit value)
			 * @returns {void}
			 */
			public translate(deltaX: any, deltaY: any): void;
			/**
			 * moves the boundary of selection relative to its current 
			 * position
			 * @param {any} deltaX horizontal transformation (unit value)
			 * @param {any} deltaY vertical transformation (unit value)
			 * @returns {void}
			 */
			public translateBoundary(deltaX: any, deltaY: any): void;
		}
	}
}