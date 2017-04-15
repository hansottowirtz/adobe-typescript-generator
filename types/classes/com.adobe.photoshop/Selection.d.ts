/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The selected area of the document or layer. */
		class Selection extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The bounding rectangle of the entire selection. */
			public readonly bounds: any[];
			/** If true, the bounding rectangle a solid rectangle. */
			public readonly solid: boolean;
			/** Clears the selection and does not copy it to the clipboard. */
			public clear(): void;
			/**
			 * Contracts the selection.
			 * @param {string} by - The amount to contract the selection.
			 */
			public contract(by: string): void;
			/**
			 * Copies the selection to the clipboard.
			 * @param {boolean} merge - If true the copy includes all 
			 * visible layers. If false, copies only from the current 
			 * layer.
			 */
			public copy(merge: boolean): void;
			/** Cuts the current selection to the clipboard. */
			public cut(): void;
			/** Deselects the current selection. */
			public deselect(): void;
			/**
			 * Expands the selection.
			 * @param {string} by - The amount to expand the selection.
			 */
			public expand(by: string): void;
			/**
			 * Feathers the edges of the selection.
			 * @param {string} by - The amount to feather the edge.
			 */
			public feather(by: string): void;
			/**
			 * Fills the selection.
			 * @param {any} fillType - The color or history state with 
			 * which to fill the object.
			 * @param {Adobe.Photoshop.ColorBlendMode} mode - The color 
			 * blend mode. ( default: ColorBlendMode.NORMAL )
			 * @param {number} opacity - The opacity as a percentage. 
			 * Range: 1 to 100. ( default: 100 )
			 * @param {boolean} preserveTransparency - If true, perserves 
			 * transparencies.
			 */
			public fill(fillType: any, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean): void;
			/**
			 * Grows the selection to include all adjacent pixels falling 
			 * within the specified tolerance range.
			 * @param {number} tolerance - The tolerance range. Range: 0 to 
			 * 255. ( 0 - 255 )
			 * @param {boolean} antiAlias - If true, anti-aliasing is used.
			 */
			public grow(tolerance: number, antiAlias: boolean): void;
			/** Inverts the selection. */
			public invert(): void;
			/**
			 * Loads the selection from the specified channel.
			 * @param {Adobe.Photoshop.Channel} _from - The channel to load 
			 * the selection from.
			 * @param {Adobe.Photoshop.SelectionType} combination - How to 
			 * combine the channel contents with the existing selection. ( 
			 * default: SelectionType.REPLACE )
			 * @param {boolean} inverting - If true, selects the inverse of 
			 * the channel contents. ( default: false )
			 */
			public load(_from: Adobe.Photoshop.Channel, combination: Adobe.Photoshop.SelectionType, inverting: boolean): void;
			/**
			 * Makes this selection item the workpath for this document.
			 * @param {number} tolerance - The tolerance in pixels.
			 */
			public makeWorkPath(tolerance: number): void;
			/**
			 * Resizes the selected area to the specified dimensions and 
			 * anchor position.
			 * @param {number} horizontal - The amount to scale the 
			 * selection horizontally (as a percentage). ( default: 100.0 )
			 * @param {number} vertical - The amount to scale the selection 
			 * vertically (as a percentage). ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to scale around. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public resize(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Scales the boundary of the selection.
			 * @param {number} horizontal - The amount to scale the object 
			 * horizontally (as a percentage). ( default: 100.0 )
			 * @param {number} vertical - The amount to scale the object 
			 * vertically (as a percentage). ( default: 100.0 )
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to scale around. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public resizeBoundary(horizontal: number, vertical: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Rotates the object.
			 * @param {number} angle - The number of degrees to rotate the 
			 * object.
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to rotate about. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public rotate(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Rotates the boundary of the selection.
			 * @param {number} angle - The rotation angle (in degrees)
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The point 
			 * to rotate about. ( default: AnchorPosition.MIDDLECENTER )
			 */
			public rotateBoundary(angle: number, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Selects the specified region.
			 * @param {any} region - Array of x and y coordinates that 
			 * describe the corners of the selection, in the format [[x1, 
			 * y1], [x2,y2],[x3, y3], [x4,y4]]
			 * @param {Adobe.Photoshop.SelectionType} _type - The method 
			 * for combining the new selection with the existing selection. 
			 * ( default: SelectionType.REPLACE )
			 * @param {number} feather - The feather amount. ( default: 0.0 
			 * )
			 * @param {boolean} antiAlias - If true, anti-aliasing is used. 
			 * ( default: true )
			 */
			public select(region: any, _type: Adobe.Photoshop.SelectionType, feather: number, antiAlias: boolean): void;
			/** Selects the entire layer. */
			public selectAll(): void;
			/**
			 * Selects the selection border only (in the specified width); 
			 * subsequent actions do not affect the selected area within 
			 * the borders.
			 * @param {string} width - The width of the border selection.
			 */
			public selectBorder(width: string): void;
			/**
			 * Grows the selection to include pixels throughout the image 
			 * falling within the tolerance range.
			 * @param {number} tolerance - The tolerance range. Range: 0 to 
			 * 255.
			 * @param {boolean} antiAlias - If true, anti-aliasing is used.
			 */
			public similar(tolerance: number, antiAlias: boolean): void;
			/**
			 * Cleans up stray pixels left inside or outside a color-based 
			 * selection (within the radius specified in pixels).
			 * @param {number} radius - The sample radius in pixels. Range: 
			 * 0 to 100. ( 0 - 100 )
			 */
			public smooth(radius: number): void;
			/**
			 * Saves the selection as a channel.
			 * @param {Adobe.Photoshop.Channel} into - The channel to save 
			 * the selection to.
			 * @param {Adobe.Photoshop.SelectionType} combination - How to 
			 * add the selection to the existing contents of the channel. ( 
			 * default: SelectionType.REPLACE )
			 */
			public store(into: Adobe.Photoshop.Channel, combination: Adobe.Photoshop.SelectionType): void;
			/**
			 * Strokes the selection.
			 * @param {any} strokeColor - The color to stroke the selection 
			 * with.
			 * @param {number} width - The stroke width.
			 * @param {Adobe.Photoshop.StrokeLocation} location - The 
			 * stroke location. ( default: StrokeLocation.CENTER )
			 * @param {Adobe.Photoshop.ColorBlendMode} mode - The color 
			 * blend mode. ( default: ColorBlendMode.NORMAL )
			 * @param {number} opacity - The opacity of the stroke color as 
			 * a percentage. Range: 1 to 100. ( default: 100 )
			 * @param {boolean} preserveTransparency - If true, preserves 
			 * transparency.
			 */
			public stroke(strokeColor: any, width: number, location: Adobe.Photoshop.StrokeLocation, mode: Adobe.Photoshop.ColorBlendMode, opacity: number, preserveTransparency: boolean): void;
			/**
			 * Moves the object relative to its current position.
			 * @param {string} deltaX - The amount to move the object 
			 * horizontally.
			 * @param {string} deltaY - The amount to move the object 
			 * vertically.
			 */
			public translate(deltaX: string, deltaY: string): void;
			/**
			 * Moves the boundary of selection relative to its current 
			 * position.
			 * @param {string} deltaX - The amount to move the object 
			 * horizontally.
			 * @param {string} deltaY - The amount to move the object 
			 * vertically.
			 */
			public translateBoundary(deltaX: string, deltaY: string): void;
		}
	}
}