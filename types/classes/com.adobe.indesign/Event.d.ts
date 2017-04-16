/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Event extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the Event becomes active. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched after a style list is changed.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ANY_STYLE_LIST_CHANGED: string;
			/**
			 * Dispatched after the Character Style list is changed.  Event 
			 * is not canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CHARACTER_STYLE_LIST_CHANGED: string;
			/**
			 * Dispatched when a Event is closing. Since the close has been 
			 * committed, it can no longer be canceled. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after the active context changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CONTEXT_CHANGED: string;
			/**
			 * Dispatched after a Event is deleted. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_DELETE: string;
			/**
			 * Dispatched after a Event is embedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_EMBED: string;
			/**
			 * Dispatched after the Event is invoked. This event does not 
			 * bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_INVOKE: string;
			/**
			 * Dispatched after one or more links in the Event have been 
			 * added, deleted, or modified. This event bubbles. This event 
			 * is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_LINKS_CHANGED: string;
			/**
			 * Dispatched after a Event is relocated from one object to 
			 * another. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_MOVE: string;
			/**
			 * Dispatched after a Event is created. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Event is opened. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after the Paragraph Style list is changed.  Event 
			 * is not canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PARAGRAPH_STYLE_LIST_CHANGED: string;
			/**
			 * Dispatched after a Event is placed. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * Dispatched when the Event is quitting. Since the quit has 
			 * been committed, it can not be canceled. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_QUIT: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Dispatched after the spread list is changed.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SPREAD_LIST_CHANGED: string;
			/**
			 * Dispatched after a Event is unembedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UNEMBED: string;
			/**
			 * Dispatched after a Event is updated. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UPDATE: string;
			/**
			 * Dispatched before a Event is closed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the Event becomes inactive. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Event is deleted. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DELETE: string;
			/**
			 * Dispatched before the Event is displayed. This event does 
			 * not bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DISPLAY: string;
			/**
			 * Dispatched before a Event is embedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_EMBED: string;
			/**
			 * Dispatched before the Event is invoked. This event does not 
			 * bubble. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_INVOKE: string;
			/**
			 * Dispatched before a Event is relocated from one object to 
			 * another. This event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_MOVE: string;
			/**
			 * Dispatched before a Event is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * Dispatched before the Event is quit. Allows the quit to be 
			 * canceled. This event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_QUIT: string;
			/**
			 * Dispatched before a Event is unembedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UNEMBED: string;
			/**
			 * Dispatched before a Event is updated. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UPDATE: string;
			/**
			 * If true, the event supports the bubbling phase of 
			 * propagation.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly bubbles: boolean;
			/**
			 * If true, the default behavior of the event on its target can 
			 * be canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly cancelable: boolean;
			/**
			 * Dispatched when a cell style is changed.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly CELL_STYLE_CHANGED: string;
			/**
			 * The current propagation target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly currentTarget: any;
			/**
			 * If true, the default behavior of the event on its target has 
			 * been canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly defaultPrevented: boolean;
			/**
			 * The current propagation phase of the event.
			 * @type {Adobe.Indesign.EventPhases}
			 * @readonly
			 */
			public readonly eventPhase: Adobe.Indesign.EventPhases;
			/**
			 * The name of the event.
			 * @type {string}
			 * @readonly
			 */
			public readonly eventType: string;
			/**
			 * The unique ID of the Event.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Event within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * Dispatched when a layer is changed.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly LAYER_CHANGED: string;
			/**
			 * Dispatched when a master page is applied.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly MASTER_PAGE_APPLIED: string;
			/**
			 * Dispatched when the Event is invoked. This event does not 
			 * bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly ON_INVOKE: string;
			/**
			 * The parent of the Event (a Object, UIDBasedObject, 
			 * CellStyleGroup, CellStyle, TableStyleGroup, Article, 
			 * ConditionSet, HiddenText, Condition, MotionPreset, 
			 * AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, 
			 * NumberingList, Snippet, Dialog, Swatch, Color, Tint, 
			 * Gradient, MixedInkGroup, MixedInk, Behavior, 
			 * SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, 
			 * GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, 
			 * ViewZoomBehavior, GotoStateBehavior, 
			 * GotoPreviousStateBehavior, GotoNextStateBehavior, 
			 * OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, 
			 * MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, 
			 * GotoNextViewBehavior, GotoPreviousPageBehavior, 
			 * GotoNextPageBehavior, GotoLastPageBehavior, 
			 * GotoFirstPageBehavior, PreflightProfileRule, 
			 * PreflightRuleInstance, PreflightProfile, 
			 * CrossReferenceFormat, HyperlinkURLDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkPageDestination, 
			 * HyperlinkTextDestination, ParagraphDestination, 
			 * HyperlinkTextSource, CrossReferenceSource, 
			 * HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, 
			 * PageReference, CrossReference, Index, TOCStyle, 
			 * FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, 
			 * NamedGrid, CompositeFontEntry, CompositeFont, 
			 * CharacterStyleGroup, ParagraphStyleGroup, 
			 * TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, 
			 * Note, TableStyle, TextPath, Asset, Link, Section, 
			 * MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, 
			 * Language, PageItem, HtmlItem, FormField, SignatureField, 
			 * TextBox, RadioButton, ListBox, ComboBox, CheckBox, 
			 * MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, 
			 * SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, 
			 * MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, 
			 * Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, 
			 * IDBasedObject, ArticleChild, ArticleMember, DialogRow, 
			 * DialogColumn, Widget, BorderPanel, MeasurementEditbox, 
			 * MeasurementCombobox, RealCombobox, AngleEditbox, 
			 * PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, 
			 * EnablingGroup, IntegerCombobox, IntegerEditbox, 
			 * RadiobuttonControl, RadiobuttonGroup, CheckboxControl, 
			 * Dropdown, StaticText, TextEditbox, BackgroundTask, State, 
			 * RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, 
			 * XMLElement, Table, Cell, IdleTask, StrokeStyle, 
			 * StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, 
			 * GraphicLayer, NonIDBasedObject, SDKCodeSnippet, 
			 * TableStyleMapping, CharStyleMapping, CellStyleMapping, 
			 * ParaStyleMapping, TimingTarget, TimingGroup, TimingList, 
			 * OpacityGradientStop, DataMergeField, 
			 * DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, 
			 * LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, 
			 * NavigationPoint, PreflightProcess, PreflightRule, 
			 * BuildingBlock, DisplaySetting, IndexingSortOption, Topic, 
			 * TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, 
			 * Submenu, Menu, StyleExportTagMap, TextVariable, 
			 * XMLRuleMatchData, ValidationError, XMLExportMap, 
			 * XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, 
			 * Change, RootObject, Document, Application, Book, Library, 
			 * Preference, SDKCodeSnippetRunner, ContentPlacerObject, 
			 * LinkedPageItemOption, LinkedStoryOption, 
			 * HTMLExportPreference, EPubExportPreference, 
			 * ConditionalTextPreference, TimingSetting, AnimationSetting, 
			 * XFLExportPreference, SWFExportPreference, 
			 * AlignDistributePreference, GrabberPreference, 
			 * ObjectStyleContentEffectsCategorySettings, 
			 * ObjectStyleFillEffectsCategorySettings, 
			 * ObjectStyleStrokeEffectsCategorySettings, 
			 * ObjectStyleObjectEffectsCategorySettings, 
			 * ChapterNumberPreference, NumberingRestartPolicy, Bullet, 
			 * DataMerge, DataMergeOption, DataMergePreference, 
			 * JPEGExportPreference, TrackChangesPreference, 
			 * NotePreference, TransformPreference, ClipboardPreference, 
			 * GeneralPreference, WatermarkPreference, ButtonPreference, 
			 * PNGExportPreference, PreflightBookOption, PreflightOption, 
			 * XMLViewPreference, DisplayPerformancePreference, 
			 * IndexOptions, LinkMetadata, MetadataPreference, 
			 * ExcelImportPreference, TaggedTextImportPreference, 
			 * TaggedTextExportPreference, WordRTFImportPreference, 
			 * TextExportPreference, TextImportPreference, 
			 * FindChangeContentTransparencySetting, 
			 * FindChangeFillTransparencySetting, 
			 * FindChangeStrokeTransparencySetting, 
			 * FindChangeTransparencySetting, GradientFeatherSetting, 
			 * FindChangeGradientFeatherSetting, DirectionalFeatherSetting, 
			 * FindChangeDirectionalFeatherSetting, 
			 * ContentTransparencySetting, SatinSetting, 
			 * FindChangeSatinSetting, BevelAndEmbossSetting, 
			 * FindChangeBevelAndEmbossSetting, InnerGlowSetting, 
			 * FindChangeInnerGlowSetting, OuterGlowSetting, 
			 * FindChangeOuterGlowSetting, InnerShadowSetting, 
			 * FindChangeInnerShadowSetting, FeatherSetting, 
			 * FindChangeFeatherSetting, DropShadowSetting, 
			 * FindChangeDropShadowSetting, BlendingSetting, 
			 * FindChangeBlendingSetting, FillTransparencySetting, 
			 * StrokeTransparencySetting, TransparencySetting, 
			 * TransparencyPreference, FlattenerPreference, 
			 * GalleyPreference, GridPrintingPreference, CjkGridPreference, 
			 * StoryGridDataInformation, LayoutGridDataInformation, 
			 * GridDataInformation, CaptionMetadataVariablePreference, 
			 * CustomTextVariablePreference, MatchParagraphStylePreference, 
			 * MatchCharacterStylePreference, FileNameVariablePreference, 
			 * DateVariablePreference, ChapterNumberVariablePreference, 
			 * PageNumberVariablePreference, FootnoteOption, 
			 * BaselineFrameGridOption, AnchoredObjectSetting, 
			 * AnchoredObjectDefault, ExportForWebPreference, 
			 * XMLPreference, XMLExportPreference, XMLImportPreference, 
			 * InCopyExportOption, LinkingPreference, 
			 * ChangeTransliteratePreference, ChangeObjectPreference, 
			 * ChangeGlyphPreference, ChangeGrepPreference, 
			 * ChangeTextPreference, FindTransliteratePreference, 
			 * FindObjectPreference, FindGlyphPreference, 
			 * FindGrepPreference, FindTextPreference, 
			 * FindChangeTransliterateOption, FindChangeObjectOption, 
			 * FindChangeGlyphOption, FindChangeGrepOption, 
			 * FindChangeTextOption, ColorSetting, ScriptArg, 
			 * ScriptPreference, PlaceGun, LayoutAdjustmentPreference, 
			 * StrokeFillProxySetting, ImportedPageAttribute, 
			 * EPSImportPreference, SmartGuidePreference, 
			 * AutoCorrectPreference, SpellPreference, PolygonPreference, 
			 * DictionaryPreference, FontLockingPreference, 
			 * MojikumiUiPreference, ContourOption, TextWrapPreference, 
			 * TextEditingPreference, FrameFittingOption, 
			 * ObjectExportOption, PageItemDefault, TaggedPDFPreference, 
			 * InteractivePDFExportPreference, PDFAttribute, 
			 * PDFPlacePreference, PDFExportPreference, IMEPreference, 
			 * GraphicLayerOption, ClippingPathSettings, ImageIOPreference, 
			 * ImagePreference, ToolBox, EPSExportPreference, 
			 * PrintBookletPrintPreference, PrintBookletOption, 
			 * PrintPreference, ViewPreference, PasteboardPreference, 
			 * MarginPreference, GuidePreference, GridPreference, 
			 * DocumentPreference, TextDefault, TextPreference, 
			 * TextFramePreference, StoryPreference, PathPoint, Path, 
			 * GradientStop, AutoCorrectTable, UserDictionary, 
			 * HyphenationException, Font, TransformationMatrix, 
			 * PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, 
			 * TextStyleRange, Paragraph, TextColumn, Line, Word, 
			 * Character, NestedGrepStyle or NestedLineStyle).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, propagation of the event beyond the current target 
			 * has been stopped.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly propagationStopped: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Dispatched when a table style is changed.  Event is not 
			 * canceleable. This event bubbles. This event is not 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly TABLE_STYLE_CHANGED: string;
			/**
			 * The target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly target: any;
			/**
			 * The time the event was initialized.
			 * @type {Date}
			 * @readonly
			 */
			public readonly timeStamp: Date;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Cancels the default behavior of the event on its target.
			 * @returns {void}
			 */
			public preventDefault(): void;
			/**
			 * Stops propagation of the event beyond the current target.
			 * @returns {void}
			 */
			public stopPropagation(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}