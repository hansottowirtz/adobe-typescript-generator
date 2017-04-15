/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PageItem extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Is the artwork used to create a knockout. */
			public artworkKnockout: Adobe.Illustrator.KnockoutState;
			/** The mode used when compositing an object. */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/**
			 * The bounds of the artwork including stroke width and 
			 * controls.
			 */
			public readonly controlBounds: any[];
			/** Can the art item be modified. */
			public readonly editable: boolean;
			/** The bounds of the artwork excluding stroke width. */
			public readonly geometricBounds: any[];
			/** The height of the art item. ( 0.0 - 16348.0 ) */
			public height: number;
			/** Is this artwork item hidden? */
			public hidden: boolean;
			/** Is the artwork isolated. */
			public isIsolated: boolean;
			/** The layer to which this artwork belongs. */
			public readonly layer: Adobe.Illustrator.Layer;
			/** The left position of the art item. */
			public left: number;
			/** Is this artwork item locked? */
			public locked: boolean;
			/** The item's name. */
			public name: string;
			/** The note assigned to this artwork item. */
			public note: string;
			/**
			 * The object's opacity (between 0.0 and 100.0) ( 0.0 - 100.0 )
			 */
			public opacity: number;
			/** The position of the top left corner of the art item. */
			public position: any[];
			/** Is this artwork item selected? */
			public selected: boolean;
			/** Is the art item sliced (default: false) */
			public sliced: boolean;
			/** The collection of tags associated with this page item. */
			public readonly tags: Adobe.Illustrator.Tags;
			/** The top position of the art item. */
			public top: number;
			/**
			 * The value of the Adobe URL tag assigned to this artwork 
			 * item.
			 */
			public uRL: string;
			/** The visibility variable bound to this page item. */
			public visibilityVariable: any;
			/** The visible bounds of the artwork including stroke width. */
			public readonly visibleBounds: any[];
			/** The width of the art item. ( 0.0 - 16348.0 ) */
			public width: number;
			/** Should the text frame object be wrapped inside this object? */
			public wrapInside: boolean;
			/** Use this offset when wrapping text around this object. */
			public wrapOffset: number;
			/**
			 * Wrap text frame objects around this object (text frame must 
			 * be above the object)
			 */
			public wrapped: boolean;
			/** The drawing order of the art within it's group or layer. */
			public readonly zOrderPosition: number;
			/**
			 * Place art object(s)in perspective grid at spedified 
			 * perspective plane and coordinate
			 * @param {number} positionX - position towards X direction of 
			 * specified or active perspective grid plane
			 * @param {number} positionY - position towards Y direction of 
			 * specified or active perspective grid plane
			 * @param {Adobe.Illustrator.PerspectiveGridPlaneType} 
			 * perspectiveGridPlane - Type of perspective grid plane. ( 
			 * default: PerspectiveGridPlaneType.NOPLANE )
			 */
			public bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: Adobe.Illustrator.PerspectiveGridPlaneType): void;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation - ( default: ElementPlacement.INSIDE )
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.PageItem;
			/**
			 * move the object
			 * @param {any} relativeObject - 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation - 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Scale art object(s)
			 * @param {number} scaleX - Horizontal scaling factor expressed 
			 * as a percentage (100 = 100%)
			 * @param {number} scaleY - Vertical scaling factor expressed 
			 * as a percentage (100 = 100%)
			 * @param {boolean} changePositions - Are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns - Are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients - Are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} changeStrokePattern - Are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {number} changeLineWidths - The amount line widths 
			 * are to be scaled (expressed as a percentage) ( default: 
			 * 100.0 )
			 * @param {Adobe.Illustrator.Transformation} scaleAbout - The 
			 * point on the art item's bounding box to which the scale is 
			 * applied. ( default: Transformation.CENTER )
			 */
			public resize(scaleX: number, scaleY: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, scaleAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Rotate art object(s)
			 * @param {number} angle - Angle of rotation (in degrees). 
			 * Rotation is performed counter-clock wise.
			 * @param {boolean} changePositions - Are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns - Are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients - Are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} changeStrokePattern - Are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {Adobe.Illustrator.Transformation} rotateAbout - The 
			 * point on the art item's bounding box to which the rotation 
			 * is applied. ( default: Transformation.CENTER )
			 */
			public rotate(angle: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, rotateAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Transform art object(s) using a transformation matrix.
			 * @param {Adobe.Illustrator.Matrix} transformationMatrix - The 
			 * transformation matrix to be applied to the objects.
			 * @param {boolean} changePositions - Are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns - Are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients - Are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} changeStrokePattern - Are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {number} changeLineWidths - The amount line widths 
			 * are to be scaled (expressed as a percentage) ( default: 
			 * 100.0 )
			 * @param {Adobe.Illustrator.Transformation} transformAbout - 
			 * The point on the art item's bounding box to which scale and 
			 * rotation operations apply. ( default: Transformation.CENTER 
			 * )
			 */
			public transform(transformationMatrix: Adobe.Illustrator.Matrix, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, transformAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Reposition art object(s)
			 * @param {number} deltaX - Horizontal transformation. ( 
			 * default: 0.0 )
			 * @param {number} deltaY - Vertical transformation. ( default: 
			 * 0.0 )
			 * @param {boolean} transformObjects - Are art object positions 
			 * and orientations affected? ( default: true )
			 * @param {boolean} transformFillPatterns - Are the fill 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} transformFillGradients - Are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} transformStrokePattern - Are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 */
			public translate(deltaX: number, deltaY: number, transformObjects: boolean, transformFillPatterns: boolean, transformFillGradients: boolean, transformStrokePattern: boolean): void;
			/**
			 * Arranges the art relative to other art in the group or 
			 * layer.
			 * @param {Adobe.Illustrator.ZOrderMethod} zOrderCmd - How to 
			 * arrange the art.
			 */
			public zOrder(zOrderCmd: Adobe.Illustrator.ZOrderMethod): void;
		}
	}
}