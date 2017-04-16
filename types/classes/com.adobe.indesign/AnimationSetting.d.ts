/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class AnimationSetting extends Adobe.Indesign.Preference {
			/**
			 * The animation design option.
			 * @type {Adobe.Indesign.DesignOptions}
			 */
			public designOption: Adobe.Indesign.DesignOptions;
			/**
			 * The duration in second for this animation.
			 * @type {number}
			 */
			public duration: number;
			/**
			 * The ease type.
			 * @type {Adobe.Indesign.AnimationEaseOptions}
			 */
			public easeType: Adobe.Indesign.AnimationEaseOptions;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Determines if this animated object has custom settings.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly hasCustomSettings: boolean;
			/**
			 * Determines if this object is hidden after its animation is 
			 * played in an exported SWF file.
			 * @type {boolean}
			 */
			public hiddenAfter: boolean;
			/**
			 * Determines if this object is initially hidden when displayed 
			 * in an exported SWF file.
			 * @type {boolean}
			 */
			public initiallyHidden: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The list of motion path points and key frames for this 
			 * animation. Can return: Ordered array containing 
			 * keyFrame:Long Integer, pathPoint:Ordered array containing 
			 * anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, 
			 * rightDirection:Array of 2 Reals.
			 * @type {any}
			 */
			public motionPath: any;
			/**
			 * The list of motion path points for this animation. Can 
			 * return: Ordered array containing pathPointArray:Array of 
			 * Ordered array containing anchor:Array of 2 Reals, 
			 * leftDirection:Array of 2 Reals, rightDirection:Array of 2 
			 * Reals, pathOpen:Boolean.
			 * @type {any}
			 */
			public motionPathPoints: any;
			/**
			 * The list of opacity key frames for this animation. Can 
			 * return: Ordered array containing keyFrame:Long Integer, 
			 * value:Real.
			 * @type {any}
			 */
			public opacityArray: any;
			/**
			 * The parent of the AnimationSetting (a PageItem, HtmlItem, 
			 * FormField, SignatureField, TextBox, RadioButton, ListBox, 
			 * ComboBox, CheckBox, MultiStateObject, Button, MediaItem, 
			 * Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, 
			 * Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, 
			 * Image, Group or TextFrame).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The number of times this animation plays.
			 * @type {number}
			 */
			public plays: number;
			/**
			 * Set to true if animation play loops.
			 * @type {boolean}
			 */
			public playsLoop: boolean;
			/**
			 * The base animation preset applied. Can return: MotionPreset, 
			 * String or NothingEnum enumerator.
			 * @type {any}
			 */
			public preset: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The list of rotation key frames for this animation. Can 
			 * return: Ordered array containing keyFrame:Long Integer, 
			 * value:Real.
			 * @type {any}
			 */
			public rotationArray: any;
			/**
			 * The list of scale x key frames for this animation. Can 
			 * return: Ordered array containing keyFrame:Long Integer, 
			 * value:Real.
			 * @type {any}
			 */
			public scaleXArray: any;
			/**
			 * The list of scale y key frames for this animation. Can 
			 * return: Ordered array containing keyFrame:Long Integer, 
			 * value:Real.
			 * @type {any}
			 */
			public scaleYArray: any;
			/**
			 * The tranform offset percentage from the target object 
			 * bounding box's left-top corner.
			 * @type {any}
			 */
			public transformOffsets: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerAnimationSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerAnimationSetting(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Save this motion preset as custom preset.
			 * @param {string} nameParam The name for the new motion 
			 * preset.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public save(nameParam: string): Adobe.Indesign.MotionPreset;
			/**
			 * Save a copy of this motion preset to a InDesign motion 
			 * preset file.
			 * @param {File} toParam The Flash motion preset file to export 
			 * to.
			 * @returns {void}
			 */
			public saveACopy(toParam: File): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}