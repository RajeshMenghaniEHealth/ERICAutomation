﻿function Test1()
{
  var gridCellContentPresenter;
  var customComboBoxEdit;
  gridCellContentPresenter = Aliases.iMDSoft_Metavision.HwndSource_ImdGenericWindow.ImdGenericWindow.GridRow.GridCellContentPresenter;
  gridCellContentPresenter.Click(297, 11);
  customComboBoxEdit = gridCellContentPresenter.FindComboBoxEdit;
  customComboBoxEdit.Keys("[ScrollLock][ScrollLock][ScrollLock][ScrollLock]");
  customComboBoxEdit.Click(297, 11);
}

