/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A page item object */
		class PageItem extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * is the artwork used to create a knockout
			 * @type {Adobe.Illustrator.KnockoutState}
			 */
			public artworkKnockout: Adobe.Illustrator.KnockoutState;
			/**
			 * the mode used when compositing an object
			 * @type {Adobe.Illustrator.BlendModes}
			 */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/**
			 * the bounds of the artwork including stroke width and 
			 * controls
			 * @type {any[]}
			 * @readonly
			 */
			public readonly controlBounds: any[];
			/**
			 * can the art item be modified
			 * @type {boolean}
			 * @readonly
			 */
			public readonly editable: boolean;
			/**
			 * the bounds of the artwork excluding stroke width
			 * @type {any[]}
			 * @readonly
			 */
			public readonly geometricBounds: any[];
			/**
			 * the height of the art item ( 0.0 - 16348.0 )
			 * @type {number}
			 */
			public height: number;
			/**
			 * is this artwork item hidden?
			 * @type {boolean}
			 */
			public hidden: boolean;
			/**
			 * is the artwork isolated
			 * @type {boolean}
			 */
			public isIsolated: boolean;
			/**
			 * the layer to which this artwork belongs
			 * @type {Adobe.Illustrator.Layer}
			 * @readonly
			 */
			public readonly layer: Adobe.Illustrator.Layer;
			/**
			 * the left position of the art item
			 * @type {number}
			 */
			public left: number;
			/**
			 * is this artwork item locked?
			 * @type {boolean}
			 */
			public locked: boolean;
			/**
			 * The item's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the note assigned to this artwork item
			 * @type {string}
			 */
			public note: string;
			/**
			 * the object's opacity (between 0.0 and 100.0) ( 0.0 - 100.0 )
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * is this artwork item aligned to Pixel Grid?
			 * @type {boolean}
			 */
			public pixelAligned: boolean;
			/**
			 * the position of the top left corner of the art item
			 * @type {any[]}
			 */
			public position: any[];
			/**
			 * is this artwork item selected?
			 * @type {boolean}
			 */
			public selected: boolean;
			/**
			 * is the art item sliced (default: false)
			 * @type {boolean}
			 */
			public sliced: boolean;
			/**
			 * The collection of tags associated with this page item
			 * @type {Adobe.Illustrator.Tags}
			 * @readonly
			 */
			public readonly tags: Adobe.Illustrator.Tags;
			/**
			 * the top position of the art item
			 * @type {number}
			 */
			public top: number;
			/**
			 * the value of the Adobe URL tag assigned to this artwork item
			 * @type {string}
			 */
			public uRL: string;
			/**
			 * the visibility variable bound to this page item
			 * @type {any}
			 */
			public visibilityVariable: any;
			/**
			 * the visible bounds of the artwork including stroke width
			 * @type {any[]}
			 * @readonly
			 */
			public readonly visibleBounds: any[];
			/**
			 * the width of the art item ( 0.0 - 16348.0 )
			 * @type {number}
			 */
			public width: number;
			/**
			 * should the text frame object be wrapped inside this object?
			 * @type {boolean}
			 */
			public wrapInside: boolean;
			/**
			 * use this offset when wrapping text around this object
			 * @type {number}
			 */
			public wrapOffset: number;
			/**
			 * wrap text frame objects around this object (text frame must 
			 * be above the object)
			 * @type {boolean}
			 */
			public wrapped: boolean;
			/**
			 * the drawing order of the art within it's group or layer
			 * @type {number}
			 * @readonly
			 */
			public readonly zOrderPosition: number;
			/**
			 * Apply effect to selected artItem
			 * @param {string} liveEffectXML 
			 * @returns {void}
			 */
			public applyEffect(liveEffectXML: string): void;
			/**
			 * Place art object(s)in perspective grid at spedified 
			 * perspective plane and coordinate
			 * @param {number} positionX position towards X direction of 
			 * specified or active perspective grid plane
			 * @param {number} positionY position towards Y direction of 
			 * specified or active perspective grid plane
			 * @param {Adobe.Illustrator.PerspectiveGridPlaneType} 
			 * perspectiveGridPlane Type of perspective grid plane.
			 * @returns {void}
			 */
			public bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: Adobe.Illustrator.PerspectiveGridPlaneType): void;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation ( default: ElementPlacement.INSIDE )
			 * @returns {Adobe.Illustrator.PageItem}
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.PageItem;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation 
			 * @returns {void}
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Scale art object(s)
			 * @param {number} scaleX horizontal scaling factor expressed 
			 * as a percentage (100 = 100%)
			 * @param {number} scaleY vertical scaling factor expressed as 
			 * a percentage (100 = 100%)
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {number} changeLineWidths the amount line widths are 
			 * to be scaled (expressed as a percentage) ( default: 100.0 )
			 * @param {Adobe.Illustrator.Transformation} scaleAbout the 
			 * point on the art item's bounding box to which the scale is 
			 * applied ( default: Transformation.CENTER )
			 * @returns {void}
			 */
			public resize(scaleX: number, scaleY: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, scaleAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Rotate art object(s)
			 * @param {number} angle angle of rotation (in degrees). 
			 * Rotation is performed counter-clock wise
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {Adobe.Illustrator.Transformation} rotateAbout the 
			 * point on the art item's bounding box to which the rotation 
			 * is applied ( default: Transformation.CENTER )
			 * @returns {void}
			 */
			public rotate(angle: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, rotateAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * sends the script message to the required plugin
			 * @param {string} pluginName Plugin to which message needs to 
			 * be sent
			 * @param {string} messageSelector Functionality that is to be 
			 * executed
			 * @param {string} inputString Pass any data encoded in a 
			 * string.
			 * @returns {string}
			 */
			public sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
			/**
			 * Transform art object(s) using a transformation matrix
			 * @param {Adobe.Illustrator.Matrix} transformationMatrix the 
			 * transformation matrix to be applied to the objects
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {number} changeLineWidths the amount line widths are 
			 * to be scaled (expressed as a percentage) ( default: 100.0 )
			 * @param {Adobe.Illustrator.Transformation} transformAbout the 
			 * point on the art item's bounding box to which scale and 
			 * rotation operations apply ( default: Transformation.CENTER )
			 * @returns {void}
			 */
			public transform(transformationMatrix: Adobe.Illustrator.Matrix, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, transformAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Reposition art object(s)
			 * @param {number} deltaX horizontal transformation ( default: 
			 * 0.0 )
			 * @param {number} deltaY vertical transformation ( default: 
			 * 0.0 )
			 * @param {boolean} transformObjects are art object positions 
			 * and orientations affected? ( default: true )
			 * @param {boolean} transformFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} transformFillGradients are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} transformStrokePattern are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 * @returns {void}
			 */
			public translate(deltaX: number, deltaY: number, transformObjects: boolean, transformFillPatterns: boolean, transformFillGradients: boolean, transformStrokePattern: boolean): void;
			/**
			 * Arranges the art relative to other art in the group or layer
			 * @param {Adobe.Illustrator.ZOrderMethod} zOrderCmd how to 
			 * arrange the art
			 * @returns {void}
			 */
			public zOrder(zOrderCmd: Adobe.Illustrator.ZOrderMethod): void;
		}
	}
}