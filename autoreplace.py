# Runs with PythonScript plugin
# Copy to %APPDATA%\Roaming\Notepad++\plugins\config\PythonScript\scripts
search_text_4 = '[4['
search_text_8 = '[8['
search_text_f = '[f['
search_text_h = '[h['
search_text_q = '[q['
search_text_i = '[i['
search_text_o = '[o['
search_text_R = '[R['
search_text_r = '[r['
search_text_S = '[S['
search_text_u = '[u['
search_text_v = '[v['
replacement_f = '<iframe title="SketchFab model" width="480" height="360"\n                  src="https://sketchfab.com/models/XXXXXXXXXXXXXXXXXXXXXXXXXXXXX/embed?ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_watermark=1&amp;ui_watermark_link=0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
replacement_h = '<div class="row">\n            <div class="col-8 col-12-narrow">\n              <h3>\n                \n              </h3>\n            </div>\n          </div>\n          <div class="row">\n            \n          </div>'
replacement_i = '<li class="do">\n                  \n                </li>\n                <li class="how">\n                  \n                </li>';
replacement_o = '<li class="option" onclick="Right|Wrong(this, \'TODO\');">\n                  \n                </li>'
replacement_q = '<li class="question" onclick="Reveal(\'TODO\');">\n                  \n                </li>\n                <li class="hidden written answer" id="TODO">\n                  \n                </li>'
replacement_r = '<div class="row">\n            \n          </div>'
replacement_R = '</div>\n          </div>\n\n          <div class="row">\n            <div class="col-8 col-12-narrow">'
replacement_u = '<ul>\n                <li class="question" onclick="Reveal(\'TODO\');">\n                  \n                </li>\n                <li class="hidden written answer" id="TODO">\n                  \n                </li>\n              </ul>'
replacement_v = '<div class="col-8 col-12-narrow">\n              <iframe src="https://durham.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id="\n                height="360" width="640" allow="fullscreen" loading="lazy"></iframe>\n            </div>'
replacement_4 = '<div class="col-4 col-12-narrow">\n              <span class="image">\n                <img src="images/" />\n              </span>\n            </div>'
replacement_8 = '<div class="col-8 col-12-narrow">\n              <p>\n                \n              </p>\n            </div>'
replacement_S = '\n        </div>\n      </div>\n    </section>\n\n    <section id="SECTION_ID" class="main">\n      <header>\n        <div class="container">\n          <span class="image featured">\n            <img src="images/IMAGE"\n                 title=""\n                 alt="Credit: " />\n          </span>\n          <h2>TODO_SECTION_HEADING</h2>\n        </div>\n      </header>\n      <div class="content dark style3">\n        <div class="container">\n          <div class="row">\n            <div class="col-8 col-12-narrow">\n              <h3>TODO_SUBHEADING</h3>\n            </div>\n          </div>\n          <div class="row">\n            \n          </div>';
def callback_sci_CHARADDED(args):
    if chr(args['ch']) == '[':
        cp = editor.getCurrentPos()
        search_text_length = 3
        start_of_search_text_pos = cp - search_text_length
        if editor.getTextRange(start_of_search_text_pos, cp) == search_text_f:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_f)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_f)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_R:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_R)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_R)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_r:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_r)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_r)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_h:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_h)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_h)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_i:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_i)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_i)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_o:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_o)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_o)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_q:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_q)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_q)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_u:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_u)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_u)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_4:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_4)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_4)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_8:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_8)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_8)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_v:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_v)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_v)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()
        elif editor.getTextRange(start_of_search_text_pos, cp) == search_text_S:
            editor.beginUndoAction()
            editor.deleteRange(start_of_search_text_pos, search_text_length)
            editor.insertText(start_of_search_text_pos, replacement_S)
            editor.endUndoAction()
            end_of_search_text_pos = start_of_search_text_pos + len(replacement_S)
            editor.setCurrentPos(end_of_search_text_pos)
            editor.setSelection(end_of_search_text_pos, end_of_search_text_pos)
            editor.chooseCaretX()

editor.callback(callback_sci_CHARADDED, [SCINTILLANOTIFICATION.CHARADDED])